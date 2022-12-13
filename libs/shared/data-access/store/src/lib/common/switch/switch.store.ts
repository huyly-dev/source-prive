import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { IFilterOption } from '@data-access-common';
import { CommonSwitchState } from './switch.state';
import { commonSwitchInitialState } from './switch.constants';

@Injectable()
export class CommonSwitchComponentStore<TData> extends ComponentStore<CommonSwitchState<TData>> {

  constructor() {
    super(commonSwitchInitialState<TData>());
  }

  public readonly updateOptions = this.updater<IFilterOption<TData>[]>((state, options) => ({
    ...state,
    options
  }));

  public readonly updateSelected = this.updater<string | undefined>((state, selected) => ({
    ...state,
    selected
  }));

  public readonly updateExtraClass = this.updater<string>((state, extraClass) => ({
    ...state,
    extraClass
  }));

}
