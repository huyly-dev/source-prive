import {
  CommonIconPackageModel,
  CommonLabelLozengesSizeModel,
  CommonLabelLozengesStatusModel,
  CommonLabelLozengesStyleModel,
  CommonIconTypeModel
} from '@data-access-common';

export interface CommonLabelLozengesState {
  status: CommonLabelLozengesStatusModel;
  style: CommonLabelLozengesStyleModel;
  size: CommonLabelLozengesSizeModel;
  label: string;
  icon: CommonIconTypeModel | undefined;
  iconPackage: CommonIconPackageModel | undefined;
  extraClass: string;
  wrapperClass: string;
  wrapperLocale: string;
}
