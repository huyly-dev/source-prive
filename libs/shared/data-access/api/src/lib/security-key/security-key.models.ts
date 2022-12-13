import { ISecurityKeyListItem } from "./security-key.interfaces";
import { AutoMap } from '@automapper/classes';

export class SecurityKeyListItem implements ISecurityKeyListItem {
  @AutoMap()
  id!: string;

  @AutoMap()
  label!: string;

  @AutoMap()
  createdAt!: Date;

  @AutoMap()
  lastUsed!: Date;
}
