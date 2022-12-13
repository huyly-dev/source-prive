import { CryptoAddressStatusNumberEnum, CryptoAddressStatusEnum } from './authentications.enum';

export interface ICryptoAddressQueryVM {
  items_per_page: number;
  page: number;
  keywords: string;
  currency: string;
  status: CryptoAddressStatusNumberEnum;
}

export interface ICryptoAddressListVM {
  crypto_addresses: ICryptoAddressListItemVM[];
  total: number;
}

export interface ICryptoAddressListItemVM {
  id: string;
  address: string;
  address_tag: string | undefined;
  currency: string;
  status: CryptoAddressStatusEnum;
}
