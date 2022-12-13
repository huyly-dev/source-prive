import { AutoMap } from '@automapper/classes';
import { IUserChangePasswordDataVM, IUserInfoVM, IUserResetPasswordDataVM } from './user.interfaces';

export class UserInfoVM implements IUserInfoVM {
  @AutoMap()
  fullname!: string;

  @AutoMap()
  email!: string;

  @AutoMap()
  phone_number!: string;

  @AutoMap()
  is_2fa_enabled!: boolean;
}

export class UserResetPasswordDataVM implements IUserResetPasswordDataVM {
  @AutoMap()
  reset_password_token!: string;

  @AutoMap()
  password!: string;

  @AutoMap()
  password_confirmation!: string;
}

export class UserChangePasswordDataVM implements IUserChangePasswordDataVM {
  @AutoMap()
  current_password!: string;

  @AutoMap()
  password!: string;

  @AutoMap()
  password_confirmation!: string;
}
