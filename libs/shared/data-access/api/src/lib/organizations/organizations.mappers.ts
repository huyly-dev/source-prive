import { mapFrom, Mapper } from '@automapper/core';
import { OrganizationDataVM } from './organizations.vms';
import { OrganizationData } from './organizations.models';
import { IOrganizationData, IOrganizationDataVM } from './organizations.interfaces';

/**
 * create map for each couple of data
 * @param mapper: Mapper
 */
export function organizationsMapperSettings(mapper: Mapper): void {
  mapper.createMap(OrganizationData, OrganizationDataVM)
    .forMember(
      (destination) => destination['g-recaptcha-response'],
      mapFrom((source) => source.captcha)
    )
    .forMember(
      (destination) => destination.is_coinhako_user,
      mapFrom((source) => source.isMember)
    );
}

/**
 * transform data from IOrganizationData (IIOrganizationData) to OrganizationDataVM (IOrganizationDataVM)
 * @param mapper: Mapper
 * @param data: IOrganizationData
 * @returns IOrganizationDataVM - data
 */
export function organizationsMapData(mapper: Mapper, data: IOrganizationData): IOrganizationDataVM {
  return mapper.map(data, OrganizationDataVM, OrganizationData);
}
