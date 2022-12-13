import { CommonToggleSizeModel } from '@data-access-common';

export interface CommonToggleState {
  selected: boolean;
  size: CommonToggleSizeModel;
  loading: boolean;
  disabled: boolean;
  wrapperClass: string;
  wrapperLocale: string;
}
