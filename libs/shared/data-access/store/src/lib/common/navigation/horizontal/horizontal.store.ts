import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { INavigationItem } from '@data-access-common';
import { CommonNavigationHorizontalState } from './horizontal.state';
import { commonNavigationHorizontalInitialState } from './horizontal.constants';

@Injectable()
export class CommonNavigationHorizontalComponentStore extends ComponentStore<CommonNavigationHorizontalState> {

  constructor() {
    super(commonNavigationHorizontalInitialState);
  }

  public readonly updateSelected = this.updater<string | undefined>((state, selected) => ({
    ...state,
    selected,
  }));

  public readonly updateSelectedOrg = this.updater<string | undefined>((state, selectedOrg) => ({
    ...state,
    selectedOrg,
    selectedOrgData: state.orgs.find((e) => e.key === selectedOrg) as INavigationItem,
  }));

  public readonly updateSelectedOrgData = this.updater<INavigationItem | undefined>((state, selectedOrgData) => ({
    ...state,
    selectedOrgData,
  }));

  public readonly updateIsLogin = this.updater<boolean>((state, isLogin) => ({
    ...state,
    isLogin
  }));

  public readonly updateOrgs = this.updater<INavigationItem[]>((state, orgs) => ({
    ...state,
    orgs,
    selectedOrgData: orgs.find((e) => e.key === state.selectedOrg) as INavigationItem,
  }));

  public readonly updateShowDropdownOrg = this.updater<boolean>((state, showDropdownOrg) => ({
    ...state,
    showDropdownOrg,
  }));

}
