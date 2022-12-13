import { FormDropdownOptionsState } from './dropdown-options.state';
import { FormDropdownOptionTypeEnum, FormDropdownSizeEnum } from '@data-access-form';

export const formDropdownOptionsInitialState = <TData>(): FormDropdownOptionsState<TData> => ({
  options: [],
  disabled: false,
  loading: false,
  size: FormDropdownSizeEnum.M,
  selected: undefined,
  selectedList: [],
  type: FormDropdownOptionTypeEnum.Single,
  wrapperClass: 'wrapper-form-dropdown__container__box',
  wrapperLocale: 'LIBS.SHARED.UI.FORM.DROPDOWN.OPTIONS'
});
