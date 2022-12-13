import { CommonIconState } from './icon.state';
import { CommonIconGlobalEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';

export const commonIconInitialState: CommonIconState = {
  icon: CommonIconGlobalEnum.Skeleton,
  iconPackage: CommonIconPackageEnum.Global,
  size: CommonIconSizeEnum.CUSTOM,
  isOval: false,
  fixedWidth: false,
  extraClass: '',
  wrapperClass: 'wrapper-common-icon',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.ICON'
};
