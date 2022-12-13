import { AutoMap } from '@automapper/classes';
import {
  IIntegratedApiTokenData,
  IIntegratedApiTokenListItem,
  IIntegratedApiTokenListItemDetail,
  IIntegratedApiTokenPermissionListPart
} from './integrated-api-token.interfaces';

export class IntegratedApiTokenPermissionListPart implements IIntegratedApiTokenPermissionListPart {
  @AutoMap()
  read: string[] = [];

  @AutoMap()
  write: string[] = [];
}

export class IntegratedApiTokenListItem implements IIntegratedApiTokenListItem {
  @AutoMap()
  id!: string;

  @AutoMap()
  tokenName!: string;

  @AutoMap()
  createdOn!: Date;

  @AutoMap()
  ipAddress: string[] = [];

  @AutoMap()
  permissions: string[] = [];
}

export class IntegratedApiTokenListItemDetail implements IIntegratedApiTokenListItemDetail {
  @AutoMap()
  id!: string;

  @AutoMap()
  organizationId!: number;

  @AutoMap()
  prefix!: string;

  @AutoMap()
  tokenName!: string;

  @AutoMap()
  createdAt!: Date;

  @AutoMap()
  updatedAt!: Date;

  @AutoMap()
  ipAddresses: string[] = [];

  @AutoMap()
  permissions: string[] = [];
}

export class IntegratedApiTokenData implements IIntegratedApiTokenData {
  @AutoMap()
  ipAddresses: string[] = [];

  @AutoMap()
  permissions: string[] = [];
}
