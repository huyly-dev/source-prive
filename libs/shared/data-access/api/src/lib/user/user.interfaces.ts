export interface IUserInstructionData {
  email: string;
}

export interface IUserInfo {
  fullname: string;
  email: string;
  phone: string;
  enableTFA: boolean;
}

export interface IUserInfoVM {
  fullname: string;
  email: string;
  phone_number: string;
  is_2fa_enabled: boolean;
}

export interface IUserResetPasswordData {
  token: string;
  password: string;
  confirmation: string;
}

export interface IUserResetPasswordDataVM {
  reset_password_token: string;
  password: string;
  password_confirmation: string;
}

export interface IUserChangePasswordData {
  current: string;
  password: string;
  confirmation: string;
}

export interface IUserChangePasswordDataVM {
  current_password: string;
  password: string;
  password_confirmation: string;
}

export interface IUserLockAccountData {
  token: string;
}
