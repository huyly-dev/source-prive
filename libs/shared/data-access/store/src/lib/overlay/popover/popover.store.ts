import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  OverlayCdkPositionModel,
  OverlayCdkTriggerModel,
  OverlayPopoverSizeModel,
  OverlayPopoverStatusModel
} from '@data-access-overlay';
import { OverlayPopoverState } from './popover.state';
import { OverlayModalRootComponentStore } from '../modal';
import { overlayPopoverInitialState } from './popover.constants';

@Injectable()
export class OverlayPopoverComponentStore extends ComponentStore<OverlayPopoverState> {

  public readonly existedModal$ = this.overlayModalStore.existedModal$;

  constructor(
    protected readonly overlayModalStore: OverlayModalRootComponentStore
  ) {
    super(overlayPopoverInitialState);
  }

  public readonly updateStatus = this.updater<OverlayPopoverStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updatePosition = this.updater<OverlayCdkPositionModel>((state, position) => ({
    ...state,
    position
  }));

  public readonly updateTrigger = this.updater<OverlayCdkTriggerModel>((state, trigger) => ({
    ...state,
    trigger
  }));

  public readonly updateSize = this.updater<OverlayPopoverSizeModel>((state, size) => ({
    ...state,
    size
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
