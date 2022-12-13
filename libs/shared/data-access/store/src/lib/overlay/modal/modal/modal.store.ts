import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayModalSizeModel, OverlayModalStatusModel } from '@data-access-overlay';
import { OverlayModalState } from './modal.state';
import { OverlayModalRootComponentStore } from '../modal-root';
import { overlayModalInitialState } from './modal.constants';

@Injectable()
export class OverlayModalComponentStore extends ComponentStore<OverlayModalState> {

  public readonly animationClass$ = this.overlayModalRootStore.select((state) => state.animationClass);

  constructor(
    protected readonly overlayModalRootStore: OverlayModalRootComponentStore
  ) {
    super(overlayModalInitialState);
  }

  public readonly updateStatus = this.updater<OverlayModalStatusModel | undefined>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateSize = this.updater<OverlayModalSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateTitle = this.updater<string | undefined>((state, title) => ({
    ...state,
    title
  }));

}
