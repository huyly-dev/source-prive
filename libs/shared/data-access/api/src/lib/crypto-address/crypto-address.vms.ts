import { CryptoAddressStatusEnum, CryptoAddressStatusQueryEnum } from './crypto-address.enums';
import { AutoMap } from '@automapper/classes';
import { ICryptoAddressListItemVM, ICryptoAddressListVM, ICryptoAddressQueryVM } from './crypto-address.interfaces';

export class CryptoAddressQueryVM implements ICryptoAddressQueryVM {
  @AutoMap()
  items_per_page!: number;

  @AutoMap()
  page!: number;

  @AutoMap()
  keywords!: string;

  @AutoMap()
  currency!: string;

  @AutoMap()
  status!: CryptoAddressStatusQueryEnum;
}

export class CryptoAddressListVM implements ICryptoAddressListVM {
  @AutoMap({ typeFn: () => CryptoAddressListItemVM })
  crypto_addresses!: CryptoAddressListItemVM[];

  @AutoMap()
  total!: number;
}

export class CryptoAddressListItemVM implements ICryptoAddressListItemVM {
  @AutoMap()
  id!: string;

  @AutoMap()
  address!: string;

  @AutoMap()
  address_tag: string | undefined;

  @AutoMap()
  status!: CryptoAddressStatusEnum;

  @AutoMap()
  currency!: string;
}
