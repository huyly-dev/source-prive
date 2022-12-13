import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@resources-environments';
import { map, Observable } from 'rxjs';
import { Mapper } from '@automapper/core';
import { MapperService } from '@data-access-service';
import { INTEGRATED_API_TOKEN_API_NAME } from './integrated-api-token.constants';
import {
  integratedApiTokenMapData,
  integratedApiTokenMapList,
  integratedApiTokenMapListItemDetail, integratedApiTokenMapPermissionList,
  integratedApiTokenMapperSettings
} from './integrated-api-token.mappers';
import {
  IIntegratedApiTokenData,
  IIntegratedApiTokenDataVM,
  IIntegratedApiTokenListItem,
  IIntegratedApiTokenListItemDetail, IIntegratedApiTokenListItemDetailVM,
  IIntegratedApiTokenListItemVM, IIntegratedApiTokenPermissionListPart, IIntegratedApiTokenPermissionListPartVM
} from './integrated-api-token.interfaces';

@Injectable({
  providedIn: 'root'
})
export class IntegratedApiTokenApi {

  public readonly endpoint = environment.api.endpoint;
  public readonly route = environment.api.routes.integratedAPIToken;
  public readonly methods = environment.api.routes.integratedAPIToken.methods;

  protected readonly mapper: Mapper;

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly mapperService: MapperService
  ) {
    this.mapper = this.mapperService.getMapper(INTEGRATED_API_TOKEN_API_NAME);
    this.settings();
  }

  public get baseEndPoint(): string {
    return `${this.endpoint}${this.route.endpoint}`;
  }

  public getAll(): Observable<IIntegratedApiTokenListItem[]> {
    const url = `${this.baseEndPoint}${this.methods.all}`;
    return this.httpClient.get<IIntegratedApiTokenListItemVM[]>(url)
      .pipe(
        map((data) => integratedApiTokenMapList(this.mapper, data))
      );
  }

  public getById(id: string): Observable<IIntegratedApiTokenListItemDetail> {
    const url = `${this.baseEndPoint}${this.methods.all}/${id}`;
    return this.httpClient.get<IIntegratedApiTokenListItemDetailVM>(url)
      .pipe(
        map((data) => integratedApiTokenMapListItemDetail(this.mapper, data))
      );
  }

  public getPermissions(): Observable<IIntegratedApiTokenPermissionListPart> {
    const url = `${this.baseEndPoint}${this.methods.permission_list}`;
    return this.httpClient.get<IIntegratedApiTokenPermissionListPartVM>(url)
      .pipe(
        map((data) => integratedApiTokenMapPermissionList(this.mapper, data))
      );
  }

  public create(data: IIntegratedApiTokenData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.all}`;
    const vm = integratedApiTokenMapData(this.mapper, data) as IIntegratedApiTokenDataVM;
    return this.httpClient.post<unknown>(url, vm);
  }

  public update(id: string, data: IIntegratedApiTokenData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.all}/${id}`;
    const vm = integratedApiTokenMapData(this.mapper, data) as IIntegratedApiTokenDataVM;
    return this.httpClient.put<unknown>(url, vm);
  }

  public remove(id: string): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.all}/${id}`;
    return this.httpClient.delete<unknown>(url);
  }

  protected settings(): void {
    integratedApiTokenMapperSettings(this.mapper);
  }
}
