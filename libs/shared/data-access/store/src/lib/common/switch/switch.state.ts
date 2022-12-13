import { IFilterOption } from '@data-access-common';

export interface CommonSwitchState<TData> {
  options: IFilterOption<TData>[];
  selected: string | undefined;
  extraClass: string;
  wrapperClass: string;
  wrapperLocale: string;
}
