import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayCdkRootState } from './cdk-root.state';
import { overlayCdkRootInitialState } from './cdk-root.constants';

@Injectable({
  providedIn: 'root'
})
export class OverlayCdkRootComponentStore extends ComponentStore<OverlayCdkRootState> {

  public readonly click$ = this.select((state) => state.click);
  public readonly resize$ = this.select((state) => state.resize);
  public readonly scroll$ = this.select((state) => state.scroll);

  constructor() {
    super(overlayCdkRootInitialState);
  }

  public readonly updateClick = this.updater<MouseEvent | undefined>((state, click) => ({
    ...state,
    click
  }));

  public readonly updateScroll = this.updater<MouseEvent | undefined>((state, scroll) => ({
    ...state,
    scroll
  }));

  public readonly updateResize = this.updater<MouseEvent | undefined>((state, resize) => ({
    ...state,
    resize
  }));
}
