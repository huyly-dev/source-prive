import { CommonTabsetState } from "./tabset.state";
import { CommonTabSizeEnum, CommonTabStyleEnum } from '@data-access-common';

export const commonTabsetInitialState: CommonTabsetState = {
  size: CommonTabSizeEnum.L,
  style: CommonTabStyleEnum.Default,
  selectedKey: undefined,
  wrapperClass: 'wrapper-common-tabset',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.TAB.TABSET'
};
