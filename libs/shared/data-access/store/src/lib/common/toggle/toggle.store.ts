import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonToggleSizeModel } from '@data-access-common';
import { CommonToggleState } from './toggle.state';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { commonToggleInitialState } from './toggle.constants';

@Injectable()
export class CommonToggleComponentStore extends ComponentStore<CommonToggleState> {

  constructor() {
    super(commonToggleInitialState);
  }

  public readonly toggle = this.effect(
    (trigger$: Observable<(state: CommonToggleState) => void>) => trigger$
      .pipe(
        switchMap((cb) =>
          this.state$
            .pipe(
              take(1),
              tap((state) => {
                if (state.loading || state.disabled) {
                  return;
                }
                state.selected = !state.selected;
                this.updateSelected(state.selected);
                cb(state);
              })
            )
        )
      )
  );

  public readonly updateSelected = this.updater<boolean>((state, selected) => ({
    ...state,
    selected
  }));

  public readonly updateSize = this.updater<CommonToggleSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateLoading = this.updater<boolean>((state, loading) => ({
    ...state,
    loading
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

}
