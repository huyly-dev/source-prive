import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  OverlayCdkPositionModel,
  OverlaySnackbarSizeModel,
  OverlaySnackbarStatusModel,
  OverlaySnackbarStyleModel
} from '@data-access-overlay';
import { OverlaySnackbarState } from './snackbar.state';
import { overlaySnackbarInitialState } from './snackbar.constants';

@Injectable()
export class OverlaySnackbarComponentStore extends ComponentStore<OverlaySnackbarState> {

  constructor() {
    super(overlaySnackbarInitialState);
  }

  public readonly updateUuid = this.updater<string>((state, uuid) => ({
    ...state,
    uuid
  }));

  public readonly updateStyle = this.updater<OverlaySnackbarStyleModel>((state, style) => ({
    ...state,
    style
  }));

  public readonly updateSize = this.updater<OverlaySnackbarSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateStatus = this.updater<OverlaySnackbarStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updatePosition = this.updater<OverlayCdkPositionModel>((state, position) => ({
    ...state,
    position
  }));

  public readonly updateTitle = this.updater<string>((state, title) => ({
    ...state,
    title
  }));

  public readonly updateText = this.updater<string>((state, text) => ({
    ...state,
    text
  }));

  public readonly updateButtonLeftText = this.updater<string>((state, buttonLeftText) => ({
    ...state,
    buttonLeftText
  }));

  public readonly updateButtonRightText = this.updater<string>((state, buttonRightText) => ({
    ...state,
    buttonRightText
  }));

  public readonly updateAnimationClass = this.updater<string>((state, animationClass) => ({
    ...state,
    animationClass
  }));


}
