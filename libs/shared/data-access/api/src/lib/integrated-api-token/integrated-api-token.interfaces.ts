export interface IIntegratedApiTokenPermissionListPart {
  read: string[];
  write: string[];
}

export interface IIntegratedApiTokenListItem {
  id: string;
  tokenName: string;
  createdOn: Date;
  ipAddress: string[];
  permissions: string[];
}

export interface IIntegratedApiTokenListItemDetail {
  id: string;
  organizationId: number;
  prefix: string;
  tokenName: string;
  createdAt: Date;
  updatedAt: Date;
  ipAddresses: string[];
  permissions: string[];
}

export interface IIntegratedApiTokenData {
  ipAddresses: string[];
  permissions: string[];
}

export interface IIntegratedApiTokenPermissionListPartVM {
  read: string[];
  write: string[];
}

export interface IIntegratedApiTokenListItemVM {
  id: string;
  token_name: string;
  created_on: Date;
  ip_address: string[];
  permissions: string[];
}

export interface IIntegratedApiTokenListItemDetailVM {
  id: string;
  organization_id: number;
  prefix: string;
  token_name: string;
  created_at: Date;
  updated_at: Date;
  ip_addresses: string[];
  permissions: string[];
}

export interface IIntegratedApiTokenDataVM {
  ip_addresses: string[];
  permissions: string[];
}
