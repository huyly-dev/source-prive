import { CommonTableSortDirectionModel } from '../models';

export interface ITableColumn<TData> {
  key: string;
  title: string;
  fixedWidth?: string;
  sortAble?: boolean;
  rowSpan?: number;
  columnSpan?: number;
  sort?: ITableColumnSort<TData>;
}

export interface ITableColumnSort<TData> {
  compare: (a: TData, b: TData, direction: CommonTableSortDirectionModel | undefined) => number;
  direction?: CommonTableSortDirectionModel;
}
