import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonAvatarSizeModel, CommonAvatarStyleModel, CommonColorModel } from '@data-access-common';
import { CommonAvatarState } from './avatar.state';
import { commonAvatarInitialState } from './avatar.constants';

@Injectable()
export class CommonAvatarComponentStore extends ComponentStore<CommonAvatarState> {

  constructor() {
    super(commonAvatarInitialState);
  }

  public readonly updateBackgroundColor = this.updater<CommonColorModel>((state, backgroundColor) => ({
    ...state,
    backgroundColor
  }));

  public readonly updateTextColor = this.updater<CommonColorModel>((state, textColor) => ({
    ...state,
    textColor
  }));

  public readonly updateStyle = this.updater<CommonAvatarStyleModel>((state, style) => ({
    ...state,
    style
  }));

  public readonly updateSize = this.updater<CommonAvatarSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateShortName = this.updater<string>((state, shortName) => ({
    ...state,
    shortName
  }));
}
