import { IDropdownOption } from '@data-access-form';

export interface CommonPaginationState {
  pageOptions: number[];
  disabled: boolean;
  total: number;
  selectedOption: number;
  selectedPage: number;
  page: number;
  pageArray: IDropdownOption<number>[];
  optionArray: IDropdownOption<number>[];
  range: string;
  start: number;
  end: number;
  canMovePrevious: boolean;
  canMoveNext: boolean;
  wrapperClass: string;
  wrapperLocale: string;
}
