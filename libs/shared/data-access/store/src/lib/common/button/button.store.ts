import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  CommonButtonSideModel,
  CommonButtonSizeModel,
  CommonButtonStatusModel,
  CommonIconPackageModel,
  CommonIconTypeModel
} from '@data-access-common';
import { CommonButtonState } from './button.state';
import { commonButtonInitialState } from './button.constants';

@Injectable()
export class CommonButtonComponentStore extends ComponentStore<CommonButtonState> {

  constructor() {
    super(commonButtonInitialState);
  }

  public readonly updateSize = this.updater<CommonButtonSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateStatus = this.updater<CommonButtonStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateSide = this.updater<CommonButtonSideModel>((state, side) => ({
    ...state,
    side
  }));

  public readonly updateIcon = this.updater<CommonIconTypeModel>((state, icon) => ({
    ...state,
    icon
  }));

  public readonly updateIconPackage = this.updater<CommonIconPackageModel>((state, iconPackage) => ({
    ...state,
    iconPackage
  }));

  public readonly updateContent = this.updater<string>((state, content) => ({
    ...state,
    content
  }));

  public readonly updateExtraClass = this.updater<string>((state, extraClass) => ({
    ...state,
    extraClass
  }));

  public readonly updateLoading = this.updater<boolean>((state, loading) => ({
    ...state,
    loading
  }));

  public readonly updateFullWidth = this.updater<boolean>((state, fullWidth) => ({
    ...state,
    fullWidth
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

  public readonly updateIsOval = this.updater<boolean>((state, isOval) => ({
    ...state,
    isOval
  }));

}
