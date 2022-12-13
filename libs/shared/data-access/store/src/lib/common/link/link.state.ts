import {
  CommonIconPackageModel,
  CommonLinkSizeModel,
  CommonLinkStatusModel,
  CommonLinkTargetModel,
  CommonIconTypeModel
} from '@data-access-common';

export interface CommonLinkState {
  status: CommonLinkStatusModel;
  size: CommonLinkSizeModel;
  target: CommonLinkTargetModel;
  icon: CommonIconTypeModel | undefined;
  iconPackage: CommonIconPackageModel | undefined;
  isOval: boolean;
  content: string;
  link: string;
  extraClass: string;
  disabled: boolean;
  wrapperClass: string;
  wrapperLocale: string;
}
