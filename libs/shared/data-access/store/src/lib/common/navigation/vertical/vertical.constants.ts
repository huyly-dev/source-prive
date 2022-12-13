import { CommonNavigationVerticalState } from "./vertical.state";
import { logout, parts } from '@data-access-common';

export const commonNavigationVerticalInitialState: CommonNavigationVerticalState = {
  selected: 'personal-info',
  name: 'Name',
  org: 'Organization',
  role: 'Tester',
  parts,
  logout,
  wrapperClass: 'wrapper-common-navigation__vertical',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.NAVIGATION.VERTICAL'
};
