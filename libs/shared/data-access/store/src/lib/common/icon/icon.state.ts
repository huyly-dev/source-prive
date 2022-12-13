import { CommonIconPackageModel, CommonIconSizeModel, CommonIconTypeModel } from '@data-access-common';

export interface CommonIconState {
  icon: CommonIconTypeModel;
  iconPackage: CommonIconPackageModel;
  size: CommonIconSizeModel;
  isOval: boolean;
  extraClass: string;
  fixedWidth: boolean;
  wrapperClass: string;
  wrapperLocale: string;
}
