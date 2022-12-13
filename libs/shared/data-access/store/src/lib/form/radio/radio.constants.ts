import { FormRadioState } from "./radio.state";
import { FormRadioDirectionEnum } from '@data-access-form';

export const formRadioInitialState = <TData>(): FormRadioState<TData> => ({
  options: [],
  disabled: false,
  selected: undefined,
  direction: FormRadioDirectionEnum.Row,
  wrapperClass: 'wrapper-form-radio',
  wrapperLocale: 'LIBS.SHARED.UI.FORM.RADIO'
});
