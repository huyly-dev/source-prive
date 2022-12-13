import { IOrganizationData } from './organizations.interfaces';
import { AutoMap } from '@automapper/classes';

export class OrganizationData implements IOrganizationData {
  @AutoMap()
  name!: string;

  @AutoMap()
  phone!: string;

  @AutoMap()
  email!: string;

  @AutoMap()
  company!: string;

  @AutoMap()
  note!: string;

  @AutoMap()
  captcha!: string;

  @AutoMap()
  isMember!: boolean;
}
