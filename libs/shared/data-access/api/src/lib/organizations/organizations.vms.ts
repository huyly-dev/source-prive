import { IOrganizationDataVM } from './organizations.interfaces';
import { AutoMap } from '@automapper/classes';

export class OrganizationDataVM implements IOrganizationDataVM {
  @AutoMap()
  name!: string;

  @AutoMap()
  phone_number!: string;

  @AutoMap()
  email!: string;

  @AutoMap()
  company!: string;

  @AutoMap()
  note!: string;

  @AutoMap()
  'g-recaptcha-response'!: string;

  @AutoMap()
  is_coinhako_user!: boolean;
}
