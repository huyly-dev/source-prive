import { CommonTabState } from './tab.state';

export const commonTabInitialState: CommonTabState = {
  key: '',
  title: '',
  disabled: false,
  active: false,
  icon: undefined,
  iconPackage: undefined,
  wrapperClass: 'wrapper-common-tab',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.TAB'
};
