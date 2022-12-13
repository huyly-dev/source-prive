import { mapFrom, Mapper } from '@automapper/core';
import {
  IntegratedApiTokenDataVM,
  IntegratedApiTokenListItemDetailVM,
  IntegratedApiTokenListItemVM,
  IntegratedApiTokenPermissionListPartVM
} from './integrated-api-token.vms';
import {
  IntegratedApiTokenData,
  IntegratedApiTokenListItem,
  IntegratedApiTokenListItemDetail,
  IntegratedApiTokenPermissionListPart
} from './integrated-api-token.models';
import {
  IIntegratedApiTokenData,
  IIntegratedApiTokenDataVM,
  IIntegratedApiTokenListItem, IIntegratedApiTokenListItemDetail, IIntegratedApiTokenListItemDetailVM,
  IIntegratedApiTokenListItemVM,
  IIntegratedApiTokenPermissionListPart,
  IIntegratedApiTokenPermissionListPartVM
} from './integrated-api-token.interfaces';

/**
 * create map for each couple of data
 * @param mapper: Mapper
 */
export function integratedApiTokenMapperSettings(mapper: Mapper): void {
  mapper.createMap(IntegratedApiTokenPermissionListPartVM, IntegratedApiTokenPermissionListPart);
  mapper.createMap(IntegratedApiTokenListItemDetailVM, IntegratedApiTokenListItemDetail)
    .forMember(
      (destination) => destination.tokenName,
      mapFrom((source) => source.token_name)
    )
    .forMember(
      (destination) => destination.createdAt,
      mapFrom((source) => source.created_at)
    )
    .forMember(
      (destination) => destination.updatedAt,
      mapFrom((source) => source.updated_at)
    )
    .forMember(
      (destination) => destination.ipAddresses,
      mapFrom((source) => source.ip_addresses)
    )
    .forMember(
      (destination) => destination.organizationId,
      mapFrom((source) => source.organization_id)
    );
  mapper.createMap(IntegratedApiTokenListItemVM, IntegratedApiTokenListItem)
    .forMember(
      (destination) => destination.tokenName,
      mapFrom((source) => source.token_name)
    )
    .forMember(
      (destination) => destination.createdOn,
      mapFrom((source) => source.created_on)
    )
    .forMember(
      (destination) => destination.ipAddress,
      mapFrom((source) => source.ip_address)
    );
  mapper.createMap(IntegratedApiTokenData, IntegratedApiTokenDataVM)
    .forMember(
      (destination) => destination.ip_addresses,
      mapFrom((source) => source.ipAddresses)
    );
}

/**
 * transform data from IntegratedApiTokenListItemVM (IIntegratedApiTokenListItemVM) to IntegratedApiTokenListItem (IIntegratedApiTokenListItem)
 * @param mapper: Mapper
 * @param data: IIntegratedApiTokenListItemVM
 * @returns IIntegratedApiTokenListItem - list tokens
 */
export function integratedApiTokenMapList(mapper: Mapper, data: IIntegratedApiTokenListItemVM[]): IIntegratedApiTokenListItem[] {
  return mapper.mapArray(data, IntegratedApiTokenListItem, IntegratedApiTokenListItemVM);
}

/**
 * transform data from IntegratedApiTokenPermissionListPartVM (IIntegratedApiTokenPermissionListPartVM) to IntegratedApiTokenPermissionListPart (IIntegratedApiTokenPermissionListPart)
 * @param mapper: Mapper
 * @param data: IIntegratedApiTokenPermissionListPartVM
 * @returns IIntegratedApiTokenPermissionListPart - list permissions
 */
export function integratedApiTokenMapPermissionList(mapper: Mapper, data: IIntegratedApiTokenPermissionListPartVM): IIntegratedApiTokenPermissionListPart {
  return mapper.map(data, IntegratedApiTokenPermissionListPart, IntegratedApiTokenPermissionListPartVM);
}

/**
 * transform data from IntegratedApiTokenListItemDetailVM (IIntegratedApiTokenListItemDetailVM) to IntegratedApiTokenListItemDetail (IIntegratedApiTokenListItemDetail)
 * @param mapper: Mapper
 * @param data: IIntegratedApiTokenListItemDetailVM
 * @returns IIntegratedApiTokenListItemDetail - item detail
 */
export function integratedApiTokenMapListItemDetail(mapper: Mapper, data: IIntegratedApiTokenListItemDetailVM): IIntegratedApiTokenListItemDetail {
  return mapper.map(data, IntegratedApiTokenListItemDetail, IntegratedApiTokenListItemDetailVM);
}

/**
 * transform data from IntegratedApiTokenDataVM (IIntegratedApiTokenDataVM) to IntegratedApiTokenData (IIntegratedApiTokenData)
 * @param mapper: Mapper
 * @param data: IIntegratedApiTokenDataVM
 * @returns IIntegratedApiTokenData - token data
 */
export function integratedApiTokenMapData(mapper: Mapper, data: IIntegratedApiTokenData): IIntegratedApiTokenDataVM {
  return mapper.map(data, IntegratedApiTokenDataVM, IntegratedApiTokenData);
}
