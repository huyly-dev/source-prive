import { mapFrom, Mapper } from '@automapper/core';
import { UserChangePasswordDataVM, UserInfoVM, UserResetPasswordDataVM } from './user.vms';
import { UserChangePasswordData, UserInfo, UserResetPasswordData } from './user.models';
import {
  IUserChangePasswordData, IUserChangePasswordDataVM,
  IUserInfo,
  IUserInfoVM,
  IUserResetPasswordData,
  IUserResetPasswordDataVM
} from './user.interfaces';

/**
 * create map for each couple of data
 * @param mapper: Mapper
 */
export function userMapperSettings(mapper: Mapper): void {
  mapper.createMap(UserInfoVM, UserInfo)
    .forMember(
      (destination) => destination.enableTFA,
      mapFrom((source) => source.is_2fa_enabled)
    )
    .forMember(
      (destination) => destination.phone,
      mapFrom((source) => source.phone_number)
    );

  mapper.createMap(UserResetPasswordData, UserResetPasswordDataVM)
    .forMember(
      (destination) => destination.reset_password_token,
      mapFrom((source) => source.token)
    )
    .forMember(
      (destination) => destination.password_confirmation,
      mapFrom((source) => source.confirmation)
    );
  mapper.createMap(UserChangePasswordData, UserChangePasswordDataVM)
    .forMember(
      (destination) => destination.current_password,
      mapFrom((source) => source.current)
    )
    .forMember(
      (destination) => destination.password_confirmation,
      mapFrom((source) => source.confirmation)
    );
}

/**
 * transform data from IUserResetPasswordData (IIUserResetPasswordData) to UserResetPasswordDataVM (IUserResetPasswordDataVM)
 * @param mapper: Mapper
 * @param data: IUserResetPasswordData
 * @returns IUserResetPasswordDataVM - data
 */
export function userMapResetPasswordData(mapper: Mapper, data: IUserResetPasswordData): IUserResetPasswordDataVM {
  return mapper.map(data, UserResetPasswordDataVM, UserResetPasswordData);
}

/**
 * transform data from IUserChangePasswordData (IIUserChangePasswordData) to UserChangePasswordDataVM (IUserChangePasswordDataVM)
 * @param mapper: Mapper
 * @param data: IUserChangePasswordData
 * @returns IUserChangePasswordDataVM - data
 */
export function userMapChangePasswordData(mapper: Mapper, data: IUserChangePasswordData): IUserChangePasswordDataVM {
  return mapper.map(data, UserChangePasswordDataVM, UserChangePasswordData);
}

/**
 * transform data from UserInfoVM (IUserInfoVM) to UserInfo (IUserInfo)
 * @param mapper: Mapper
 * @param data: IUserInfoVM
 * @returns IUserInfo - data
 */
export function userMapInfo(mapper: Mapper, data: IUserInfoVM): IUserInfo {
  return mapper.map(data, UserInfo, UserInfoVM);
}
