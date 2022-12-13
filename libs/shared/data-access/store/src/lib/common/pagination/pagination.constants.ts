import { CommonPaginationState } from "./pagination.state";

export const commonPaginationInitialState: CommonPaginationState = {
  pageOptions: [10, 50, 100, 200],
  disabled: false,
  total: 0,
  selectedOption: 10,
  selectedPage: 0,
  page: 1,
  optionArray: [],
  pageArray: [],
  range: '',
  start: 1,
  end: 1,
  canMovePrevious: false,
  canMoveNext: false,
  wrapperClass: 'wrapper-common-pagination',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.PAGINATION'
};
