import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@resources-environments';
import { map, Observable } from 'rxjs';
import { MapperService } from '@data-access-service';
import { Mapper } from '@automapper/core';
import { SECURITY_KEY_API_NAME } from './security-key.constants';
import {
  ISecurityKeyListItem,
  ISecurityKeyListItemVM, ISecurityRegisterKeyChallengeData,
  ISecurityRegisterNewKeyData,
  ISecurityUpdateLabelData
} from './security-key.interfaces';
import { securityKeyMapList, securityKeyMapperSettings } from './security-key.mappers';
import { PublicKeyCredentialCreationOptionsJSON } from '@github/webauthn-json/dist/types/basic/json';

@Injectable({
  providedIn: 'root'
})
export class SecurityKeyApi {

  public readonly endpoint = environment.api.endpoint;
  public readonly route = environment.api.routes.security_key;
  public readonly methods = environment.api.routes.security_key.methods;

  protected readonly mapper: Mapper;

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly mapperService: MapperService
  ) {
    this.mapper = this.mapperService.getMapper(SECURITY_KEY_API_NAME);
    this.settings();
  }

  public get baseEndPoint(): string {
    return `${this.endpoint}${this.route.endpoint}`;
  }

  /**
   * get security keys
   * @returns Observable<ISecurityKeyListItem[]>
   */
  public getAll(): Observable<ISecurityKeyListItem[]> {
    const url = `${this.baseEndPoint}${this.methods.all}`;
    return this.httpClient.get<ISecurityKeyListItemVM[]>(url).pipe(
      map((data) => securityKeyMapList(this.mapper, data))
    );
  }

  public registerChallenge(data: ISecurityRegisterKeyChallengeData): Observable<PublicKeyCredentialCreationOptionsJSON> {
    const url = `${this.baseEndPoint}${this.methods.register_challenge}`;
    return this.httpClient.post<PublicKeyCredentialCreationOptionsJSON>(url, data);
  }

  public register(data: ISecurityRegisterNewKeyData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.all}`;
    return this.httpClient.post<unknown>(url, data);
  }

  public updateLabel(id: string, data: ISecurityUpdateLabelData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.all}/${id}`;
    return this.httpClient.put<unknown>(url, data);
  }

  public remove(id: string): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.all}/${id}`;
    return this.httpClient.delete<unknown>(url);
  }

  protected settings(): void {
    securityKeyMapperSettings(this.mapper);
  }
}
