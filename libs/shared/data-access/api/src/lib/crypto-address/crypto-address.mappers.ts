import { mapFrom, Mapper, mapWith } from '@automapper/core';
import { CryptoAddressList, CryptoAddressListItem, CryptoAddressQuery } from './crypto-address.models';
import { CryptoAddressListItemVM, CryptoAddressListVM, CryptoAddressQueryVM } from './crypto-address.vms';
import { ICryptoAddressList, ICryptoAddressListVM } from './crypto-address.interfaces';

/**
 * create map for each couple of data
 * @param mapper: Mapper
 */
export function cryptoAddressMapperSettings(mapper: Mapper): void {
  mapper.createMap(CryptoAddressListItemVM, CryptoAddressListItem)
    .forMember(
      (destination) => destination.addressTag,
      mapFrom((source) => source.address_tag)
    );
  mapper.createMap(CryptoAddressListVM, CryptoAddressList)
    .forMember(
      (destination) => destination.cryptoAddresses,
      mapWith(CryptoAddressListItem, CryptoAddressListItemVM, (source) => source.crypto_addresses)
    );
  mapper.createMap(CryptoAddressQuery, CryptoAddressQueryVM)
    .forMember(
      (destination) => destination.items_per_page,
      mapFrom((source) => source.itemsPerPage)
    );
}

/**
 * transform data from CryptoAddressListVM (ICryptoAddressListVM) to CryptoAddressList (ICryptoAddressList)
 * @param mapper: Mapper
 * @param data: ICryptoAddressListVM
 * @returns ICryptoAddressList - list crypto address
 */
export function cryptoAddressMapList(mapper: Mapper, data: ICryptoAddressListVM): ICryptoAddressList {
  return mapper.map(data, CryptoAddressList, CryptoAddressListVM);
}
