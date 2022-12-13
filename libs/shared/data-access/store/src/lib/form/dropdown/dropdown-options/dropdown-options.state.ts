import { FormDropdownOptionTypeModel, FormDropdownSizeModel, IDropdownOption } from '@data-access-form';

export interface FormDropdownOptionsState<TData> {
  options: IDropdownOption<TData>[];
  size: FormDropdownSizeModel;
  selected: string | undefined;
  selectedList: string[];
  type: FormDropdownOptionTypeModel;
  loading: boolean;
  disabled: boolean;
  wrapperClass: string;
  wrapperLocale: string;
}
