import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayCdkPositionModel, OverlayToastStatusModel, OverlayToastStyleModel } from '@data-access-overlay';
import { OverlayToastState } from './toast.state';
import { overlayToastInitialState } from './toast.constants';

@Injectable()
export class OverlayToastComponentStore extends ComponentStore<OverlayToastState> {

  constructor() {
    super(overlayToastInitialState);
  }

  public readonly updateUuid = this.updater<string>((state, uuid) => ({
    ...state,
    uuid
  }));

  public readonly updateStatus = this.updater<OverlayToastStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateStyle = this.updater<OverlayToastStyleModel>((state, style) => ({
    ...state,
    style
  }));

  public readonly updatePosition = this.updater<OverlayCdkPositionModel>((state, position) => ({
    ...state,
    position
  }));

  public readonly updateText = this.updater<string>((state, text) => ({
    ...state,
    text
  }));

  public readonly updateAnimationClass = this.updater<string>((state, animationClass) => ({
    ...state,
    animationClass
  }));

}
