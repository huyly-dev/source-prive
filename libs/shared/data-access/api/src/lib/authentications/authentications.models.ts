import { CryptoAddressStatusEnum, CryptoAddressStatusNumberEnum } from './authentications.enum';
import { AutoMap } from '@automapper/classes';

export class CryptoAddressQuery {
  @AutoMap()
  itemsPerPage!: number;

  @AutoMap()
  page!: number;

  @AutoMap()
  keywords!: string;

  @AutoMap()
  currency!: string;

  @AutoMap()
  status!: CryptoAddressStatusNumberEnum;
}

export class CryptoAddressList {
  @AutoMap({ typeFn: () => CryptoAddressListItem })
  cryptoAddresses!: CryptoAddressListItem[];

  @AutoMap()
  total!: number;
}

export class CryptoAddressListItem {
  @AutoMap()
  id!: string;

  @AutoMap()
  address!: string;

  @AutoMap()
  addressTag: string | undefined;

  @AutoMap()
  currency!: string;

  @AutoMap()
  status!: CryptoAddressStatusEnum;
}
