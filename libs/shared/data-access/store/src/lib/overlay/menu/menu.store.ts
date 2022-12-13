import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayCdkPositionModel, OverlayCdkTriggerModel } from '@data-access-overlay';
import { OverlayMenuState } from './menu.state';
import { OverlayModalRootComponentStore } from '../modal';
import { overlayMenuInitialState } from './menu.constants';

@Injectable()
export class OverlayMenuComponentStore extends ComponentStore<OverlayMenuState> {

  public readonly existedModal$ = this.overlayModalStore.existedModal$;

  constructor(
    protected readonly overlayModalStore: OverlayModalRootComponentStore
  ) {
    super(overlayMenuInitialState);
  }

  public readonly updatePosition = this.updater<OverlayCdkPositionModel>((state, position) => ({
    ...state,
    position
  }));

  public readonly updateTrigger = this.updater<OverlayCdkTriggerModel>((state, trigger) => ({
    ...state,
    trigger
  }));

  public readonly updateTop = this.updater<string>((state, top) => ({
    ...state,
    top
  }));

  public readonly updateRight = this.updater<string>((state, right) => ({
    ...state,
    right
  }));

  public readonly updateBottom = this.updater<string>((state, bottom) => ({
    ...state,
    bottom
  }));

  public readonly updateLeft = this.updater<string>((state, left) => ({
    ...state,
    left
  }));

}
