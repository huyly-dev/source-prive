import {
  FormDropdownDirectionModel,
  FormDropdownSizeModel,
  IDropdownOption
} from '@data-access-form';
import { CommonIconPackageModel, CommonIconTypeModel } from '@data-access-common';

export interface FormDropdownMultipleState<TData> {
  options: IDropdownOption<TData>[];
  selected: string[];
  direction: FormDropdownDirectionModel;
  size: FormDropdownSizeModel;
  placeholder: string;
  label: string;
  loading: boolean;
  disabled: boolean;
  icon: CommonIconTypeModel | undefined;
  iconPackage: CommonIconPackageModel | undefined;
  expanded: boolean;
  text: string;
  value: IDropdownOption<TData>[];
  wrapperClass: string;
  wrapperLocale: string;
}
