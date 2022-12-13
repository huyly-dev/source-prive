import {
  ChangeDetectionStrategy,
  Component, ContentChild,
  ContentChildren,
  EventEmitter,
  Input, Optional,
  Output,
  QueryList, TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { CommonIconPackageEnum, CommonIconSizeEnum, ITableColumn } from '@data-access-common';
import { CommonTableComponentStore } from '@data-access-store';
import { PriveCommonTableColumnComponent } from '../table-column/table-column.component';
import { map } from 'rxjs/operators';
import { PriveCommonTableEmptyCustomDirective } from '../../directives';

export interface ITableChildren {
  [key: string]: PriveCommonTableColumnComponent;
}

@Component({
  selector: 'prive-common-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    CommonTableComponentStore
  ]
})
export class PriveCommonTableComponent<TData> {

  @Output()
  public readonly headerClick: EventEmitter<ITableColumn<TData>> = new EventEmitter<ITableColumn<TData>>();

  @Output()
  public readonly bodyClick: EventEmitter<{ data: TData, column: ITableColumn<TData> }> = new EventEmitter<{ data: TData, column: ITableColumn<TData> }>();

  @Input()
  @Optional()
  public set rows(rows: TData[] | undefined) {
    if (rows) {
      this.store.updateRows(rows);
    }
  }

  @Input()
  @Optional()
  public set columns(columns: ITableColumn<TData>[] | undefined) {
    if (columns) {
      this.store.updateColumns(columns);
    }
  }

  @Input()
  @Optional()
  public set emptySvg(emptySvg: string | undefined) {
    this.store.updateEmptySvg(emptySvg);
  }

  @Input()
  @Optional()
  public set emptyMessage(emptyMessage: string | undefined) {
    if (emptyMessage) {
      this.store.updateEmptyMessage(emptyMessage);
    }
  }

  @ContentChildren(PriveCommonTableColumnComponent)
  public set children(children: QueryList<PriveCommonTableColumnComponent>) {
    children.forEach((item) => {
      this.childrenKeys[item.key] = item;
    });
  }

  @ContentChild(PriveCommonTableEmptyCustomDirective, { read: TemplateRef, static: true })
  public emptyCustom!: TemplateRef<HTMLElement>;

  public readonly state$ = this.store.state$
    .pipe(
      map((state) => ({
        ...state,
        sortedRows: state.rows.sort(
          (a, b) => {
            return state.columns.reduce(
              (acc, cur) => {
                if (!cur.sort) {
                  return acc;
                }

                const { compare, direction } = cur.sort;

                return acc + compare(a, b, direction);
              },
              0
            );
          }
        )
      })),
    );

  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;

  public readonly childrenKeys: ITableChildren = {};

  constructor(
    protected readonly store: CommonTableComponentStore<TData>
  ) { }

  public columnSort(column: ITableColumn<TData>): void {
    if (!column.sort) {
      return;
    }

    this.store.sort(column.key);
  }

}
