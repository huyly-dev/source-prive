import { CommonIconPackageModel, CommonIconTypeModel } from '@data-access-common';

export interface CommonLabelTagState {
  removable: boolean;
  oval: boolean;
  disabled: boolean;
  label: string;
  icon: CommonIconTypeModel | undefined;
  iconPackage: CommonIconPackageModel | undefined;
  extraClass: string;
  wrapperClass: string;
  wrapperLocale: string;
}
