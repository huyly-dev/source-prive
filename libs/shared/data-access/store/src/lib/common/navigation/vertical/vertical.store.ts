import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonNavigationVerticalState } from './vertical.state';
import { commonNavigationVerticalInitialState } from './vertical.constants';

@Injectable()
export class CommonNavigationVerticalComponentStore extends ComponentStore<CommonNavigationVerticalState> {

  constructor() {
    super(commonNavigationVerticalInitialState);
  }

  public readonly updateSelected = this.updater<string>((state, selected) => ({
    ...state,
    selected
  }));

  public readonly updateName = this.updater<string>((state, name) => ({
    ...state,
    name
  }));

  public readonly updateOrg = this.updater<string>((state, org) => ({
    ...state,
    org
  }));

  public readonly updateRole = this.updater<string>((state, role) => ({
    ...state,
    role
  }));

}
