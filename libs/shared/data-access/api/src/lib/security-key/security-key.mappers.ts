import { Mapper } from '@automapper/core';
import { SecurityKeyListItemVM } from './security-key.vms';
import { SecurityKeyListItem } from './security-key.models';
import { ISecurityKeyListItem, ISecurityKeyListItemVM } from './security-key.interfaces';

/**
 * create map for each couple of data
 * @param mapper: Mapper
 */
export function securityKeyMapperSettings(mapper: Mapper): void {
  mapper.createMap(SecurityKeyListItemVM, SecurityKeyListItem);
}

/**
 * transform data from SecurityKeyListItem (SecurityKeyListItem) to SecurityKeyListItemVM (SecurityKeyListItemVM)
 * @param mapper: Mapper
 * @param data: SecurityKeyListItemVM[]
 * @returns SecurityKeyListItem[] - list security keys
 */
export function securityKeyMapList(mapper: Mapper, data: ISecurityKeyListItemVM[]): ISecurityKeyListItem[] {
  return mapper.mapArray(data, SecurityKeyListItem, SecurityKeyListItemVM);
}
