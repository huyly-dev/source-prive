import { CommonFilterState } from './filter.state';
import { CommonFilterSizeEnum, CommonFilterStatusEnum } from '@data-access-common';

export const commonFilterInitialState: CommonFilterState = {
  size: CommonFilterSizeEnum.M,
  status: CommonFilterStatusEnum.Primary,
  content: '',
  extraClass: '',
  disabled: false,
  active: false,
  iconLeft: undefined,
  iconRight: undefined,
  packageIconLeft: undefined,
  packageIconRight: undefined,
  wrapperClass: 'wrapper-common-filter',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.FILTER'
};
