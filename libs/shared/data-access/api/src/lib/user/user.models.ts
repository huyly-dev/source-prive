import { AutoMap } from '@automapper/classes';
import { IUserChangePasswordData, IUserInfo, IUserResetPasswordData } from './user.interfaces';

export class UserInfo implements IUserInfo {
  @AutoMap()
  fullname!: string;

  @AutoMap()
  email!: string;

  @AutoMap()
  phone!: string;

  @AutoMap()
  enableTFA!: boolean;
}

export class UserResetPasswordData implements IUserResetPasswordData {
  @AutoMap()
  token!: string;

  @AutoMap()
  password!: string;

  @AutoMap()
  confirmation!: string;
}

export class UserChangePasswordData implements IUserChangePasswordData {
  @AutoMap()
  current!: string;

  @AutoMap()
  password!: string;

  @AutoMap()
  confirmation!: string;
}
