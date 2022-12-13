import { AutoMap } from '@automapper/classes';
import {
  IIntegratedApiTokenDataVM,
  IIntegratedApiTokenListItemVM,
  IIntegratedApiTokenListItemDetailVM,
  IIntegratedApiTokenPermissionListPartVM
} from './integrated-api-token.interfaces';

export class IntegratedApiTokenPermissionListPartVM implements IIntegratedApiTokenPermissionListPartVM {
  @AutoMap()
  read: string[] = [];

  @AutoMap()
  write: string[] = [];
}

export class IntegratedApiTokenListItemVM implements IIntegratedApiTokenListItemVM {
  @AutoMap()
  id!: string;

  @AutoMap()
  token_name!: string;

  @AutoMap()
  created_on!: Date;

  @AutoMap()
  ip_address: string[] = [];

  @AutoMap()
  permissions: string[] = [];
}

export class IntegratedApiTokenListItemDetailVM implements IIntegratedApiTokenListItemDetailVM {
  @AutoMap()
  id!: string;

  @AutoMap()
  organization_id!: number;

  @AutoMap()
  prefix!: string;

  @AutoMap()
  token_name!: string;

  @AutoMap()
  created_at!: Date;

  @AutoMap()
  updated_at!: Date;

  @AutoMap()
  ip_addresses: string[] = [];

  @AutoMap()
  permissions: string[] = [];
}

export class IntegratedApiTokenDataVM implements IIntegratedApiTokenDataVM {
  @AutoMap()
  ip_addresses: string[] = [];

  @AutoMap()
  permissions: string[] = [];
}
