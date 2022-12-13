import { CommonButtonState } from './button.state';
import {
  CommonButtonSideEnum,
  CommonButtonSizeEnum,
  CommonButtonStatusEnum,
  CommonIconGlobalEnum,
  CommonIconPackageEnum
} from '@data-access-common';

export const commonButtonInitialState: CommonButtonState = {
  size: CommonButtonSizeEnum.M,
  status: CommonButtonStatusEnum.Primary,
  content: '...',
  extraClass: '',
  loading: false,
  disabled: false,
  fullWidth: false,
  icon: CommonIconGlobalEnum.Add,
  iconPackage: CommonIconPackageEnum.Crypto,
  isOval: false,
  side: CommonButtonSideEnum.Left,
  wrapperClass: 'wrapper-common-button',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.BUTTON'
};
