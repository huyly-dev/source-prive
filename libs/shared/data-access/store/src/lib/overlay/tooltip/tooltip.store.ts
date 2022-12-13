import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayCdkPositionModel, OverlayCdkTriggerModel, OverlayTooltipStatusModel } from '@data-access-overlay';
import { OverlayTooltipState } from './tooltip.state';
import { OverlayModalRootComponentStore } from '../modal';
import { overlayTooltipInitialState } from './tooltip.constants';

@Injectable()
export class OverlayTooltipComponentStore extends ComponentStore<OverlayTooltipState> {

  public readonly existedModal$ = this.overlayModalStore.existedModal$;

  constructor(
    protected readonly overlayModalStore: OverlayModalRootComponentStore
  ) {
    super(overlayTooltipInitialState);
  }

  public readonly updateStatus = this.updater<OverlayTooltipStatusModel>((state, status) => ({
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

  public readonly updateText = this.updater<string>((state, text) => ({
    ...state,
    text
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
