import { Pipe, PipeTransform } from '@angular/core';
import { CommonIconGlobalEnum, CommonTableSortDirectionEnum, CommonTableSortDirectionModel } from '@data-access-common';

@Pipe({
  name: 'priveCommonTableSortIcon'
})
export class PriveCommonTableSortIconPipe implements PipeTransform {

  public transform(value: CommonTableSortDirectionModel | undefined): CommonIconGlobalEnum {
    if (value === CommonTableSortDirectionEnum.DOWN) return CommonIconGlobalEnum.SortDown;
    if (value === CommonTableSortDirectionEnum.UP) return CommonIconGlobalEnum.SortUp;

    return CommonIconGlobalEnum.Sort;
  }

}
