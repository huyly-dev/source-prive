import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormRadioDirectionModel, IRadioOption } from '@data-access-form';
import { FormRadioState } from './radio.state';
import { formRadioInitialState } from './radio.constants';

@Injectable()
export class FormRadioComponentStore<TData> extends ComponentStore<FormRadioState<TData>> {

  constructor() {
    super(formRadioInitialState<TData>());
  }

  public readonly updateOptions = this.updater<IRadioOption<TData>[]>((state, options) => ({
    ...state,
    options
  }));

  public readonly updateSelected = this.updater<string | undefined>((state, selected) => ({
    ...state,
    selected
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

  public readonly updateDirection = this.updater<FormRadioDirectionModel>((state, direction) => ({
    ...state,
    direction
  }));

}
