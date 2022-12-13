import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayAlertStatusModel } from '@data-access-overlay';
import { OverlayAlertSectionState } from './alert-section.state';
import { overlayAlertSectionInitialState } from './alert-section.constants';

@Injectable()
export class OverlayAlertSectionComponentStore extends ComponentStore<OverlayAlertSectionState> {

  constructor() {
    super(overlayAlertSectionInitialState);
  }

  public readonly updateStatus = this.updater<OverlayAlertStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateText = this.updater<string>((state, text) => ({
    ...state,
    text
  }));

  public readonly updateTitle = this.updater<string>((state, title) => ({
    ...state,
    title
  }));

  public readonly updateTextOnly = this.updater<boolean>((state, textOnly) => ({
    ...state,
    textOnly
  }));

}
