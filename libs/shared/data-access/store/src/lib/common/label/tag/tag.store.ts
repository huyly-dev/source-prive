import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonIconPackageModel, CommonIconTypeModel } from '@data-access-common';
import { CommonLabelTagState } from './tag.state';
import { CommonLabelTagInitialState } from './tag.constants';

@Injectable()
export class CommonLabelTagComponentStore extends ComponentStore<CommonLabelTagState> {

  constructor() {
    super(CommonLabelTagInitialState);
  }

  public readonly updateRemovable = this.updater<boolean>((state, removable) => ({
    ...state,
    removable
  }));

  public readonly updateOval = this.updater<boolean>((state, oval) => ({
    ...state,
    oval
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

  public readonly updateLabel = this.updater<string>((state, label) => ({
    ...state,
    label
  }));

  public readonly updateIcon = this.updater<CommonIconTypeModel | undefined>((state, icon) => ({
    ...state,
    icon
  }));

  public readonly updateIconPackage = this.updater<CommonIconPackageModel | undefined>((state, iconPackage) => ({
    ...state,
    iconPackage
  }));

  public readonly updateExtraClass = this.updater<string>((state, extraClass) => ({
    ...state,
    extraClass
  }));

}
