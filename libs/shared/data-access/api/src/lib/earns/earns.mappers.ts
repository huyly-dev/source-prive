import { Mapper } from '@automapper/core';
import { EarnApyListItemVM } from './earns.vms';
import { EarnApyListItem } from './earns.models';
import { IEarnApyListItem, IEarnApyListItemVM } from './earns.interfaces';

/**
 * create map for each couple of data
 * @param mapper: Mapper
 */
export function earnsMapperSettings(mapper: Mapper): void {
  mapper.createMap(EarnApyListItemVM, EarnApyListItem);
}

/**
 * transform data from EarnApyListItemVM (IEarnApyListItemVM) to EarnApyListItem (IEarnApyListItem)
 * @param mapper: Mapper
 * @param data: IEarnApyListItemVM
 * @returns IEarnApyListItem - list earns apy
 */
export function earnsMapList(mapper: Mapper, data: IEarnApyListItemVM[]): IEarnApyListItem[] {
  return mapper.mapArray(data, EarnApyListItem, EarnApyListItemVM);
}
