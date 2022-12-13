import { CommonTableState } from "./table.state";

export const commonTableInitialState = <TData>(): CommonTableState<TData> => ({
  rows: [],
  columns: [],
  emptyMessage: 'Empty',
  emptySvg: undefined,
  wrapperClass: 'wrapper-common-table',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.TABLE'
});
