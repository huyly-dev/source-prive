import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonTabsetState } from './tabset.state';
import { CommonTabSizeModel, CommonTabStyleModel } from '@data-access-common';
import { commonTabsetInitialState } from './tabset.constants';

@Injectable()
export class CommonTabsetComponentStore extends ComponentStore<CommonTabsetState> {

  constructor() {
    super(commonTabsetInitialState);
  }

  public readonly updateStyle = this.updater<CommonTabStyleModel>((state, style) => ({
    ...state,
    style
  }));

  public readonly updateSize = this.updater<CommonTabSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateSelectedKey = this.updater<string | undefined>((state, selectedKey) => ({
    ...state,
    selectedKey
  }));

  public readonly initKey = this.updater<string | undefined>((state, selectedKey) => ({
    ...state,
    selectedKey: state.selectedKey ? state.selectedKey : selectedKey
  }));

}
