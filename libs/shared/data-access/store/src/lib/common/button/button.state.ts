import {
  CommonButtonSideModel,
  CommonButtonSizeModel,
  CommonButtonStatusModel,
  CommonIconPackageModel,
  CommonIconTypeModel
} from '@data-access-common';

export interface CommonButtonState {
  size: CommonButtonSizeModel;
  status: CommonButtonStatusModel;
  content: string;
  extraClass: string;
  loading: boolean;
  disabled: boolean;
  fullWidth: boolean;
  icon: CommonIconTypeModel;
  iconPackage: CommonIconPackageModel;
  isOval: boolean;
  side: CommonButtonSideModel;
  wrapperClass: string;
  wrapperLocale: string;
}
