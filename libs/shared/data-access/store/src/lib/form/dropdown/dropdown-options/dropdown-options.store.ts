import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormDropdownOptionTypeEnum, FormDropdownSizeModel, IDropdownOption } from '@data-access-form';
import { FormDropdownOptionsState } from './dropdown-options.state';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { OverlayCdkRootComponentStore } from '../../../overlay';
import { formDropdownOptionsInitialState } from './dropdown-options.constants';

@Injectable()
export class FormDropdownOptionsComponentStore<TData> extends ComponentStore<FormDropdownOptionsState<TData>> {

  constructor(
    protected readonly cdk: OverlayCdkRootComponentStore
  ) {
    super(formDropdownOptionsInitialState<TData>());
  }

  public readonly selectOption = this.effect(
    (trigger$: Observable<(state: FormDropdownOptionsState<TData>) => void>) => trigger$
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

  public readonly updateOptions = this.updater<IDropdownOption<TData>[]>((state, options) => ({
    ...state,
    options
  }));

  public readonly updateSize = this.updater<FormDropdownSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateSelected = this.updater<string | undefined>((state, selected) => ({
    ...state,
    selected
  }));

  public readonly updateSelectedList = this.updater<string[]>((state, selectedList) => ({
    ...state,
    selectedList
  }));

  public readonly updateType = this.updater<FormDropdownOptionTypeEnum>((state, type) => ({
    ...state,
    type
  }));

  public readonly updateLoading = this.updater<boolean>((state, loading) => ({
    ...state,
    loading
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

  public readonly updateCdkClick = (event: MouseEvent | undefined) => {
    this.cdk.updateClick(event);
  }

}
