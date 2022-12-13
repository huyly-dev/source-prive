import { FormRadioDirectionModel, IRadioOption } from '@data-access-form';

export interface FormRadioState<TData> {
  options: IRadioOption<TData>[];
  selected: string | undefined;
  disabled: boolean;
  direction: FormRadioDirectionModel;
  wrapperClass: string;
  wrapperLocale: string;
}
