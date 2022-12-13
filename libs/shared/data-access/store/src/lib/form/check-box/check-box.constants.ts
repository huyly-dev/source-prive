import { FormCheckBoxState } from "./check-box.state";
import { FormCheckBoxStatusEnum } from '@data-access-form';

export const formCheckBoxInitialState: FormCheckBoxState = {
  status: FormCheckBoxStatusEnum.UnCheck,
  disabled: false,
  label: '',
  canSwitchIndeterminate: false,
  wrapperClass: 'wrapper-form-check-box',
  wrapperLocale: 'LIBS.SHARED.UI.FORM.CHECK_BOX'
};
