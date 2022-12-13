import { FormDropdownMultipleState } from './dropdown-multiple.state';
import { FormDropdownDirectionEnum, FormDropdownSizeEnum } from '@data-access-form';

export const formDropdownMultipleInitialState = <TData>(): FormDropdownMultipleState<TData> => ({
  disabled: false,
  selected: [],
  label: '',
  placeholder: '',
  loading: false,
  expanded: false,
  text: '',
  value: [],
  icon: undefined,
  iconPackage: undefined,
  options: [],
  direction: FormDropdownDirectionEnum.Row,
  size: FormDropdownSizeEnum.M,
  wrapperClass: 'wrapper-form-dropdown',
  wrapperLocale: 'LIBS.SHARED.UI.FORM.DROPDOWN'
});
