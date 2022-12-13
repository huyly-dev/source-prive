import { ITableColumn } from '@data-access-common';

export interface CommonTableState<TData> {
  rows: TData[];
  columns: ITableColumn<TData>[];
  emptySvg: string | undefined;
  emptyMessage: string;
  wrapperClass: string;
  wrapperLocale: string;
}
