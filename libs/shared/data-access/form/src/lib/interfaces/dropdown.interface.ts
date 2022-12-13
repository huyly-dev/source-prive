import {
  CommonIconPackageModel,
  CommonIconTypeModel,
} from '@data-access-common';
import {
  FormDropdownOptionConditionModel,
  FormDropdownOptionTypeModel
} from '../models';

export interface IDropdownOption<T> {
  readonly label: string;
  readonly key: string;
  readonly disabled?: boolean;
  readonly value: T;
  readonly icon?: CommonIconTypeModel;
  readonly package?: CommonIconPackageModel;
}

export interface IDropdownOptionArgs {
  readonly type: FormDropdownOptionTypeModel,
  readonly selected: string | undefined,
  readonly selectedList: string[],
  readonly condition: FormDropdownOptionConditionModel;
}
