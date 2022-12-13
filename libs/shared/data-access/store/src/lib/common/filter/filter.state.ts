import {
  CommonFilterSizeModel,
  CommonFilterStatusModel,
  CommonIconPackageModel,
  CommonIconTypeModel
} from '@data-access-common';

export interface CommonFilterState {
  size: CommonFilterSizeModel;
  status: CommonFilterStatusModel;
  content: string;
  iconLeft: CommonIconTypeModel | undefined;
  packageIconLeft: CommonIconPackageModel | undefined;
  iconRight: CommonIconTypeModel | undefined;
  packageIconRight: CommonIconPackageModel | undefined;
  extraClass: string;
  disabled: boolean;
  active: boolean;
  wrapperClass: string;
  wrapperLocale: string;
}
