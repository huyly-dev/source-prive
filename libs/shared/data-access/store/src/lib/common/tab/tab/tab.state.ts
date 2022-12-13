import { CommonIconPackageModel, CommonIconTypeModel } from '@data-access-common';

export interface CommonTabState {
  key: string;
  title: string;
  icon: CommonIconTypeModel | undefined;
  iconPackage: CommonIconPackageModel | undefined;
  disabled: boolean;
  active: boolean;
  wrapperClass: string;
  wrapperLocale: string;
}
