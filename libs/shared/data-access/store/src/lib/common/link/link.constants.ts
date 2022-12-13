import { CommonLinkSizeEnum, CommonLinkStatusEnum, CommonLinkTargetEnum } from '@data-access-common';
import { CommonLinkState } from './link.state';

export const commonLinkInitialState: CommonLinkState = {
  target: CommonLinkTargetEnum.Self,
  status: CommonLinkStatusEnum.Standalone,
  size: CommonLinkSizeEnum.M,
  icon: undefined,
  iconPackage: undefined,
  isOval: false,
  content: '',
  link: 'javascript:void(0)',
  extraClass: '',
  disabled: false,
  wrapperClass: 'wrapper-common-link',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.LINK'
};
