import { CryptoAddressStatusEnum, CryptoAddressStatusQueryEnum } from './crypto-address.enums';
import { AutoMap } from '@automapper/classes';
import { ICryptoAddressList, ICryptoAddressListItem, ICryptoAddressQuery } from './crypto-address.interfaces';

export class CryptoAddressQuery implements ICryptoAddressQuery {
  @AutoMap()
  itemsPerPage!: number;

  @AutoMap()
  page!: number;

  @AutoMap()
  keywords!: string;

  @AutoMap()
  currency!: string;

  @AutoMap()
  status!: CryptoAddressStatusQueryEnum;
}

export class CryptoAddressList implements ICryptoAddressList {
  @AutoMap({ typeFn: () => CryptoAddressListItem })
  cryptoAddresses!: CryptoAddressListItem[];

  @AutoMap()
  total!: number;
}

export class CryptoAddressListItem implements ICryptoAddressListItem {
  @AutoMap()
  id!: string;

  @AutoMap()
  address!: string;

  @AutoMap()
  addressTag: string | undefined;

  @AutoMap()
  status!: CryptoAddressStatusEnum;

  @AutoMap()
  currency!: string;
}
