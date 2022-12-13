import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  CommonIconPackageModel,
  CommonIconTypeModel,
  CommonLabelLozengesSizeModel,
  CommonLabelLozengesStatusModel,
  CommonLabelLozengesStyleModel
} from '@data-access-common';
import { CommonLabelLozengesState } from './lozenges.state';
import { CommonLabelLozengesInitialState } from './lozenges.constants';

@Injectable()
export class CommonLabelLozengesComponentStore extends ComponentStore<CommonLabelLozengesState> {

  constructor() {
    super(CommonLabelLozengesInitialState);
  }

  public readonly updateStatus = this.updater<CommonLabelLozengesStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateStyle = this.updater<CommonLabelLozengesStyleModel>((state, style) => ({
    ...state,
    style
  }));

  public readonly updateSize = this.updater<CommonLabelLozengesSizeModel>((state, size) => ({
    ...state,
    size
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
