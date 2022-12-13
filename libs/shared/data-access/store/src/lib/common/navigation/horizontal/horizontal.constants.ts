import { CommonNavigationHorizontalState } from './horizontal.state';
import { items, logout, parts } from '@data-access-common';

export const commonNavigationHorizontalInitialState: CommonNavigationHorizontalState = {
  selected: undefined,
  selectedOrg: undefined,
  selectedOrgData: undefined,
  isLogin: false,
  orgs: [],
  items,
  parts,
  logout,
  showDropdownOrg: false,
  wrapperClass: 'wrapper-common-navigation__horizontal',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.NAVIGATION.HORIZONTAL'
};
