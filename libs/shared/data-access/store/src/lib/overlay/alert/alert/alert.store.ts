import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayAlertActionTypeModel, OverlayAlertStatusModel, OverlayAlertStyleModel } from '@data-access-overlay';
import { CommonButtonStatusModel, CommonLinkStatusModel } from '@data-access-common';
import { OverlayAlertState } from './alert.state';
import { overlayAlertInitialState } from './alert.constants';

@Injectable()
export class OverlayAlertComponentStore extends ComponentStore<OverlayAlertState> {

  constructor() {
    super(overlayAlertInitialState);
  }

  public readonly toggle = this.updater<undefined>((state) => ({
    ...state,
    collapsed: !state.collapsed
  }))

  public readonly updateStatus = this.updater<OverlayAlertStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateStyle = this.updater<OverlayAlertStyleModel>((state, style) => ({
    ...state,
    style
  }));

  public readonly updateText = this.updater<string>((state, text) => ({
    ...state,
    text
  }));

  public readonly updateTitle = this.updater<string>((state, title) => ({
    ...state,
    title
  }));

  public readonly updateButtonText = this.updater<string>((state, buttonText) => ({
    ...state,
    buttonText
  }));

  public readonly updateButtonStatus = this.updater<CommonButtonStatusModel>((state, buttonStatus) => ({
    ...state,
    buttonStatus
  }));

  public readonly updateLinkStatus = this.updater<CommonLinkStatusModel>((state, linkStatus) => ({
    ...state,
    linkStatus
  }));

  public readonly updateActionType = this.updater<OverlayAlertActionTypeModel>((state, actionType) => ({
    ...state,
    actionType
  }));

  public readonly updateCollapsed = this.updater<boolean>((state, collapsed) => ({
    ...state,
    collapsed
  }));

  public readonly updateShowStatusIcon = this.updater<boolean>((state, showStatusIcon) => ({
    ...state,
    showStatusIcon
  }));

}
