import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayAlertSizeModel, OverlayAlertStatusModel } from '@data-access-overlay';
import { OverlayAlertInlineState } from './alert-inline.state';
import { overlayAlertInlineInitialState } from './alert-inline.constants';

@Injectable()
export class OverlayAlertInlineComponentStore extends ComponentStore<OverlayAlertInlineState> {

  constructor() {
    super(overlayAlertInlineInitialState);
  }

  public readonly updateStatus = this.updater<OverlayAlertStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateSize = this.updater<OverlayAlertSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateText = this.updater<string>((state, text) => ({
    ...state,
    text
  }));

}
