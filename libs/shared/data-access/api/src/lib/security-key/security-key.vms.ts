import { ISecurityKeyListItemVM } from './security-key.interfaces';
import { AutoMap } from '@automapper/classes';

export class SecurityKeyListItemVM implements ISecurityKeyListItemVM {
  @AutoMap()
  id!: string;

  @AutoMap()
  label!: string;

  @AutoMap()
  created_at!: Date;

  @AutoMap()
  last_used!: Date;
}
