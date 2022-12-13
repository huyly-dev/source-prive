import { CommonToggleState } from "./toggle.state";
import { CommonToggleSizeEnum } from '@data-access-common';

export const commonToggleInitialState: CommonToggleState = {
  selected: false,
  disabled: false,
  loading: false,
  size: CommonToggleSizeEnum.M,
  wrapperClass: 'wrapper-common-toggle',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.TOGGLE'
};
