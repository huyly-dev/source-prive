import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonTableState } from './table.state';
import { CommonTableSortDirectionEnum, ITableColumn, ITableColumnSort } from '@data-access-common';
import { commonTableInitialState } from './table.constants';

@Injectable()
export class CommonTableComponentStore<TData> extends ComponentStore<CommonTableState<TData>> {

  constructor() {
    super(commonTableInitialState<TData>());
  }

  public readonly updateRows = this.updater<TData[]>((state, rows) => ({
    ...state,
    rows
  }));

  public readonly updateColumns = this.updater<ITableColumn<TData>[]>((state, columns) => ({
    ...state,
    columns
  }));

  public readonly updateEmptySvg = this.updater<string | undefined>((state, emptySvg) => ({
    ...state,
    emptySvg
  }));

  public readonly updateEmptyMessage = this.updater<string>((state, emptyMessage) => ({
    ...state,
    emptyMessage
  }));

  public readonly sort = this.updater<string>((state, key) => {
    const pos = state.columns.findIndex((column) => column.key === key);
    if (pos > -1) {
      const { direction } = (state.columns[pos].sort as ITableColumnSort<TData>);

      if (direction === CommonTableSortDirectionEnum.UP) {
        (state.columns[pos].sort as ITableColumnSort<TData>).direction = CommonTableSortDirectionEnum.DOWN;
      } else if (direction === CommonTableSortDirectionEnum.DOWN) {
        (state.columns[pos].sort as ITableColumnSort<TData>).direction = CommonTableSortDirectionEnum.NONE;
      } else {
        (state.columns[pos].sort as ITableColumnSort<TData>).direction = CommonTableSortDirectionEnum.UP;
      }
    }
    return {
      ...state
    };
  });

}
