import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonPaginationState } from './pagination.state';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { commonPaginationInitialState } from './pagination.constants';

@Injectable()
export class CommonPaginationComponentStore extends ComponentStore<CommonPaginationState> {

  constructor() {
    super(commonPaginationInitialState);
  }

  public readonly updatePageOptions = this.updater<number[]>((state, pageOptions) => {
    state.pageOptions = pageOptions;
    return this.getUpdatedState(state);
  });

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => {
    state.disabled = disabled;
    return this.getUpdatedState(state);
  });

  public readonly updateTotal = this.updater<number>((state, total) => {
    state.total = total;
    return this.getUpdatedState(state);
  });

  public readonly updateSelectedOption = this.updater<number>((state, selectedOption) => {
    state.selectedOption = selectedOption;
    return this.getUpdatedState(state);
  });

  public readonly updateSelectedPage = this.updater<number>((state, selectedPage) => {
    state.selectedPage = selectedPage;
    return this.getUpdatedState(state);
  });

  public readonly moveNext = this.updater<undefined>((state) => ({
    ...state,
    selectedPage: state.canMoveNext ? state.selectedPage + 1 : state.selectedPage
  }));

  public readonly movePrevious = this.updater<undefined>((state) => ({
    ...state,
    selectedPage: state.canMovePrevious ? state.selectedPage - 1 : state.selectedPage
  }));

  public readonly resetSelectedPage = this.effect(
    (trigger$: Observable<(state: CommonPaginationState) => void>) => trigger$
      .pipe(
        switchMap((cb) =>
          this.state$
            .pipe(
              take(1),
              tap((state) => {
                cb(state);
              })
            )
        )
      )
  );

  protected getUpdatedState(state: CommonPaginationState): CommonPaginationState {

    this.setSelectedPage(state);
    this.setPage(state);
    this.setPageArray(state);
    this.setOptionArray(state);
    this.setRange(state);
    this.setStart(state);
    this.setEnd(state);
    this.setCanMovePrevious(state);
    this.setCanMoveNext(state);

    return state;
  }

  protected setSelectedPage(state: CommonPaginationState): void {
    if (state.total > 0) {
      if (state.selectedPage > state.page) {
        state.selectedPage = state.page;
      } else if (state.selectedPage <= 0) {
        state.selectedPage = 1;
      }
    } else {
      state.selectedPage = 0;
    }
  }

  protected setPage(state: CommonPaginationState): void {
    const after = state.total % state.selectedOption;
    state.page = state.total <= 0 ? 0 : after > 0 ? (((state.total - after) / state.selectedOption) + 1) : state.total / state.selectedOption;
  }

  protected setPageArray(state: CommonPaginationState): void {
    state.pageArray = Array.from(new Array(state.page)).map((e, i) => ({
      label: (i + 1).toString(),
      key: (i + 1).toString(),
      value: i + 1
    }));
  }

  protected setOptionArray(state: CommonPaginationState): void {
    state.optionArray = state.pageOptions.map((e) => ({
      label: e.toString(),
      key: e.toString(),
      value: e
    }));
  }

  protected setRange(state: CommonPaginationState): void {
    state.range = (state.total <= 0 || state.selectedPage <= 0 ? 0 : state.start)
      + '-'
      + (state.total <= 0 || state.selectedPage <= 0 ? 0 : (state.end >= state.total ? state.total : state.end));
  }

  protected setStart(state: CommonPaginationState): void {
    state.start = (state.selectedPage * state.selectedOption) + 1;
  }

  protected setEnd(state: CommonPaginationState): void {
    state.end = (state.selectedPage * state.selectedOption) + state.selectedPage;
  }

  protected setCanMovePrevious(state: CommonPaginationState): void {
    state.canMovePrevious = state.total > 0 && state.selectedPage > 1;
  }

  protected setCanMoveNext(state: CommonPaginationState): void {
    state.canMoveNext = state.total > 0 && state.selectedPage > 0 && state.selectedPage < state.page;
  }
}
