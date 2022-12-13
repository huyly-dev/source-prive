import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  CommonFilterSizeModel,
  CommonFilterStatusModel,
  CommonIconPackageModel,
  CommonIconTypeModel
} from '@data-access-common';
import { CommonFilterState } from './filter.state';
import { commonFilterInitialState } from './filter.constants';

@Injectable()
export class CommonFilterComponentStore extends ComponentStore<CommonFilterState> {

  constructor() {
    super(commonFilterInitialState);
  }

  public readonly updateSize = this.updater<CommonFilterSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateStatus = this.updater<CommonFilterStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateContent = this.updater<string>((state, content) => ({
    ...state,
    content
  }));

  public readonly updateIconLeft = this.updater<CommonIconTypeModel | undefined>((state, iconLeft) => ({
    ...state,
    iconLeft
  }));

  public readonly updatePackageIconLeft = this.updater<CommonIconPackageModel | undefined>((state, packageIconLeft) => ({
    ...state,
    packageIconLeft
  }));

  public readonly updateIconRight = this.updater<CommonIconTypeModel | undefined>((state, iconRight) => ({
    ...state,
    iconRight
  }));

  public readonly updatePackageIconRight = this.updater<CommonIconPackageModel | undefined>((state, packageIconRight) => ({
    ...state,
    packageIconRight
  }));

  public readonly updateExtraClass = this.updater<string>((state, extraClass) => ({
    ...state,
    extraClass
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

  public readonly updateActive = this.updater<boolean>((state, active) => ({
    ...state,
    active
  }));

}
