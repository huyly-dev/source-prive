import { CryptoAddressStatusEnum, CryptoAddressStatusQueryEnum } from './crypto-address.enums';

export interface ICryptoAddressQuery {
  itemsPerPage: number;
  page: number;
  keywords: string;
  currency: string;
  status: CryptoAddressStatusQueryEnum;
}

export interface ICryptoAddressList {
  cryptoAddresses: ICryptoAddressListItem[];
  total: number;
}

export interface ICryptoAddressListItem {
  id: string;
  address: string;
  addressTag: string | undefined;
  status: CryptoAddressStatusEnum;
  currency: string;
}

export interface ICryptoAddressQueryVM {
  items_per_page: number;
  page: number;
  keywords: string;
  currency: string;
  status: CryptoAddressStatusQueryEnum;
}

export interface ICryptoAddressListVM {
  crypto_addresses: ICryptoAddressListItemVM[];
  total: number;
}

export interface ICryptoAddressListItemVM {
  id: string;
  address: string;
  address_tag: string | undefined;
  status: CryptoAddressStatusEnum;
  currency: string;
}
