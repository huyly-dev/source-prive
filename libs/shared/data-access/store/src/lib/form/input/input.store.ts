import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  FormInputDirectionModel,
  FormInputSizeModel,
  FormInputStatusEnum,
  FormInputStatusModel,
  FormInputTypeModel,
  InputHelper
} from '@data-access-form';
import { FormInputState } from './input.state';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { cloneDeep } from 'lodash';
import { formInputInitialState } from './input.constants';

@Injectable()
export class FormInputComponentStore extends ComponentStore<FormInputState> {

  constructor() {
    super(formInputInitialState);
  }

  public readonly resetClass = this.effect(
    (trigger$: Observable<(value: string) => void>) => trigger$
      .pipe(
        switchMap((cb) =>
          this.select((state) => state.customClass)
            .pipe(
              take(1),
              tap((value) => {
                cb(value);
              })
            )
        )
      )
  );

  public readonly resize = this.effect(
    (trigger$: Observable<(value: boolean) => void>) => trigger$
      .pipe(
        switchMap((cb) =>
          this.select((state) => state.canResize)
            .pipe(
              take(1),
              tap((value) => {
                cb(value);
              })
            )
        )
      )
  );

  public readonly updateCanShowError = this.updater<boolean>((state, canShowError) => ({
    ...state,
    canShowError
  }));

  public readonly updateCanShowErrorMessage = this.updater<boolean>((state, canShowErrorMessage) => ({
    ...state,
    canShowErrorMessage
  }));

  public readonly updateCanShowSuccess = this.updater<boolean>((state, canShowSuccess) => ({
    ...state,
    canShowSuccess
  }));

  public readonly updateCanShowSuccessMessage = this.updater<boolean>((state, canShowSuccessMessage) => ({
    ...state,
    canShowSuccessMessage
  }));

  public readonly updateCanShowWarning = this.updater<boolean>((state, canShowWarning) => ({
    ...state,
    canShowWarning
  }));

  public readonly updateSuccessMessage = this.updater<string>((state, successMessage) => ({
    ...state,
    successMessage
  }));

  public readonly updateWarningMessage = this.updater<string>((state, warningMessage) => ({
    ...state,
    warningMessage
  }));

  public readonly updateErrorMessage = this.updater<string>((state, errorMessage) => ({
    ...state,
    errorMessage
  }));

  public readonly updateCanShowWarningMessage = this.updater<boolean>((state, canShowWarningMessage) => ({
    ...state,
    canShowWarningMessage
  }));

  public readonly updateLabel = this.updater<string>((state, label) => ({
    ...state,
    label
  }));

  public readonly updatePlaceholder = this.updater<string>((state, placeholder) => ({
    ...state,
    placeholder
  }));

  public readonly updateCustomClass = this.updater<string>((state, customClass) => ({
    ...state,
    customClass
  }));

  public readonly updateName = this.updater<string>((state, name) => ({
    ...state,
    name
  }));

  public readonly updateId = this.updater<string>((state, id) => ({
    ...state,
    id
  }));

  public readonly updateRequired = this.updater<boolean>((state, required) => ({
    ...state,
    required
  }));

  public readonly updateTimeSleep = this.updater<number>((state, timeSleep) => ({
    ...state,
    timeSleep
  }));

  public readonly updateDirection = this.updater<FormInputDirectionModel>((state, direction) => ({
    ...state,
    direction
  }));

  public readonly updateSize = this.updater<FormInputSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateStatus = this.updater<FormInputStatusModel>((state, status) => ({
    ...state,
    status,
    existWhite: status === FormInputStatusEnum.White
  }));

  public readonly updateClassName = this.updater<string>((state, className) => ({
    ...state,
    className
  }));

  public readonly updateCanResize = this.updater<boolean>((state, canResize) => ({
    ...state,
    canResize
  }));

  public readonly updateInputExisted = this.updater<boolean>((state, inputExisted) => ({
    ...state,
    inputExisted
  }));

  public readonly updateLength = this.updater<number>((state, length) => ({
    ...state,
    length
  }));

  public readonly updateMaxlength = this.updater<number | string>((state, maxlength) => ({
    ...state,
    maxlength
  }));

  public readonly updateMinlength = this.updater<number | string>((state, minlength) => ({
    ...state,
    minlength
  }));

  public readonly updateNodeName = this.updater<'input' | 'textarea' | string>((state, nodeName) => ({
    ...state,
    nodeName
  }));

  public readonly updateValue = this.updater<string | number | undefined>((state, value) => ({
    ...state,
    value
  }));

  public readonly updateFocused = this.updater<boolean>((state, focused) => ({
    ...state,
    focused
  }));

  public readonly updateValid = this.updater<boolean>((state, valid) => ({
    ...state,
    valid
  }));

  public readonly updateHardValid = this.updater<boolean>((state, hardValid) => ({
    ...state,
    hardValid
  }));

  public readonly updateTouched = this.updater<boolean>((state, touched) => ({
    ...state,
    touched
  }));

  public readonly updateDirty = this.updater<boolean>((state, dirty) => ({
    ...state,
    dirty
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

  public readonly updateReadonly = this.updater<boolean>((state, readonly) => ({
    ...state,
    readonly
  }));

  public readonly updateInputType = this.updater<FormInputTypeModel | string>((state, inputType) => ({
    ...state,
    inputType
  }));

  public getUpdatedState(state: FormInputState): FormInputState {
    const newState = cloneDeep(state) as FormInputState;

    const dirty = newState.dirty || newState.touched;
    const valid = newState.valid && newState.hardValid;

    newState.canShowError = newState.canShowError && !valid && dirty;
    newState.canShowErrorMessage = newState.canShowErrorMessage && !valid && dirty;
    newState.canShowSuccess = newState.canShowSuccess && valid && dirty;
    newState.canShowSuccessMessage = newState.canShowSuccessMessage && valid && dirty;
    newState.canShowWarning = newState.canShowWarning && !newState.canShowError && !newState.canShowSuccess;
    newState.canShowWarningMessage = newState.canShowWarningMessage && !newState.canShowSuccessMessage && !newState.canShowErrorMessage;
    newState.length = newState.value ? newState.value.toString().length : 0;
    newState.className = this.getClassName(newState);
    newState.status = this.getStatus(newState);

    return newState;
  }

  public throwNotExistedError(): void {
    InputHelper.throwRequiredError();
  }

  protected getClassName(state: FormInputState): string {

    let className = '';
    className += ((state.touched || state.dirty) ? ' touched' : '');
    className += (state.required ? ' required' : '');
    className += (state.readonly ? ' readonly' : '');
    className += (state.disabled ? ' disabled' : '');
    className += (state.inputType ? ' type-' + state.inputType : '');

    className.replace(' can-show-error', '');
    className.replace(' can-show-error-message', '');
    className.replace(' can-show-success', '');
    className.replace(' can-show-success-message', '');
    className.replace(' can-show-warning', '');
    className.replace(' can-show-warning-message', '');

    className += `${state.canShowError ? ' can-show-error ' : ''}${state.canShowErrorMessage ? ' can-show-error-message ' : ''}`;
    className += `${state.canShowSuccess ? ' can-show-success ' : ''}${state.canShowSuccessMessage ? ' can-show-success-message ' : ''}`;
    className += `${state.canShowWarning ? ' can-show-warning ' : ''}${state.canShowWarningMessage ? ' can-show-warning-message ' : ''}`;


    return className;
  }

  protected getStatus(state: FormInputState): FormInputStatusModel {
    const valid = state.valid && state.hardValid;

    if (valid) {
      return state.canShowSuccess ? FormInputStatusEnum.Success : (state.existWhite ? FormInputStatusEnum.White : FormInputStatusEnum.Neutral);
    } else {
      return state.canShowError ? FormInputStatusEnum.Error : (state.existWhite ? FormInputStatusEnum.White : FormInputStatusEnum.Neutral);
    }
  }

}
