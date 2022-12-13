import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@resources-environments';
import { MapperService } from '@data-access-service';
import { Mapper } from '@automapper/core';
import { userMapChangePasswordData, userMapInfo, userMapperSettings, userMapResetPasswordData } from './user.mappers';
import { USER_API_NAME } from './user.constants';
import {
  IUserChangePasswordData,
  IUserInfo,
  IUserInfoVM,
  IUserInstructionData,
  IUserLockAccountData,
  IUserResetPasswordData
} from './user.interfaces';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApi {

  public readonly endpoint = environment.api.endpoint;
  public readonly route = environment.api.routes.user;
  public readonly methods = environment.api.routes.user.methods;

  protected readonly mapper: Mapper;

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly mapperService: MapperService
  ) {
    this.mapper = this.mapperService.getMapper(USER_API_NAME);
    this.settings();
  }

  public get baseEndPoint(): string {
    return `${this.endpoint}${this.route.endpoint}`;
  }

  public getInfo(): Observable<IUserInfo> {
    const url = `${this.baseEndPoint}${this.methods.info}`;
    return this.httpClient.get<IUserInfoVM>(url)
      .pipe(
        map((data) => userMapInfo(this.mapper, data))
      );
  }

  public sendResetPasswordInstruction(data: IUserInstructionData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.send_reset_password_instructions}`;
    return this.httpClient.post<unknown>(url, data);
  }

  public resetPassword(data: IUserResetPasswordData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.reset_password}`;
    const vm = userMapResetPasswordData(this.mapper, data);
    return this.httpClient.put<unknown>(url, vm);
  }

  public changePassword(data: IUserChangePasswordData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.change_password}`;
    const vm = userMapChangePasswordData(this.mapper, data);
    return this.httpClient.put<unknown>(url, vm);
  }

  public lockAccount(data: IUserLockAccountData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.lock_account}`;
    return this.httpClient.put<unknown>(url, data);
  }

  public sendUnlockInstruction(data: IUserInstructionData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.send_unlock_instructions}`;
    return this.httpClient.post<unknown>(url, data);
  }

  protected settings(): void {
    userMapperSettings(this.mapper);
  }
}
