import { Mapper } from '@automapper/core';
import { PriceListItemVM } from './prices.vms';
import { PriceListItem } from './prices.models';
import { IPriceListItem, IPriceListItemVM } from './prices.interfaces';

/**
 * create map for each couple of data
 * @param mapper: Mapper
 */
export function pricesMapperSettings(mapper: Mapper): void {
  mapper.createMap(PriceListItemVM, PriceListItem);
}

/**
 * transform data from PriceListItem (PriceListItem) to PriceListItemVM (PriceListItemVM)
 * @param mapper: Mapper
 * @param data: PriceListItemVM[]
 * @returns PriceListItem[] - list price
 */
export function pricesMapList(mapper: Mapper, data: IPriceListItemVM[]): IPriceListItem[] {
  return mapper.mapArray(data, PriceListItem, PriceListItemVM);
}
