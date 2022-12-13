import { FormDropdownState } from './dropdown.state';
import { FormDropdownDirectionEnum, FormDropdownSizeEnum } from '@data-access-form';

export const formDropdownInitialState = <TData>(): FormDropdownState<TData> => ({
  disabled: false,
  selected: undefined,
  label: '',
  placeholder: '',
  loading: false,
  expanded: false,
  text: '',
  value: undefined,
  icon: undefined,
  iconPackage: undefined,
  options: [],
  direction: FormDropdownDirectionEnum.Column,
  size: FormDropdownSizeEnum.M,
  wrapperClass: 'wrapper-form-dropdown',
  wrapperLocale: 'LIBS.SHARED.UI.FORM.DROPDOWN'
});
