import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonIconPackageModel, CommonIconSizeModel, CommonIconTypeModel } from '@data-access-common';
import { CommonIconState } from './icon.state';
import { commonIconInitialState } from './icon.constants';

@Injectable()
export class CommonIconComponentStore extends ComponentStore<CommonIconState> {

  constructor() {
    super(commonIconInitialState);
  }

  public readonly updateIcon = this.updater<CommonIconTypeModel>((state, icon) => ({
    ...state,
    icon
  }));

  public readonly updateIconPackage = this.updater<CommonIconPackageModel>((state, iconPackage) => ({
    ...state,
    iconPackage
  }));

  public readonly updateSize = this.updater<CommonIconSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateIsOval = this.updater<boolean>((state, isOval) => ({
    ...state,
    isOval
  }));

  public readonly updateFixedWidth = this.updater<boolean>((state, fixedWidth) => ({
    ...state,
    fixedWidth
  }));

  public readonly updateExtraClass = this.updater<string>((state, extraClass) => ({
    ...state,
    extraClass
  }));

}
