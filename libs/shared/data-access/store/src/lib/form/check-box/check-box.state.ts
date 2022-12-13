import { FormCheckBoxStatusModel } from '@data-access-form';

export interface FormCheckBoxState {
  status: FormCheckBoxStatusModel;
  canSwitchIndeterminate: boolean;
  disabled: boolean;
  label: string;
  wrapperClass: string;
  wrapperLocale: string;
}
