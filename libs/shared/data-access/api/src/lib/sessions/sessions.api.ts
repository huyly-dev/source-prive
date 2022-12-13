import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@resources-environments';
import { Observable } from 'rxjs';
import { MapperService } from '@data-access-service';
import { Mapper } from '@automapper/core';
import { sessionsMapperSettings } from './sessions.mappers';
import { SESSIONS_API_NAME } from './sessions.constants';
import { ISessionSignInData, ISessionVerifyData } from './sessions.interfaces';
import { PublicKeyCredentialRequestOptionsJSON } from '@github/webauthn-json/dist/types/basic/json';

@Injectable({
  providedIn: 'root'
})
export class SessionApi {

  public readonly endpoint = environment.api.endpoint;
  public readonly route = environment.api.routes.sessions;
  public readonly methods = environment.api.routes.sessions.methods;

  protected readonly mapper: Mapper;

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly mapperService: MapperService
  ) {
    this.mapper = this.mapperService.getMapper(SESSIONS_API_NAME);
    this.settings();
  }

  public get baseEndPoint(): string {
    return `${this.endpoint}${this.route.endpoint}`;
  }

  public signIn(data: ISessionSignInData): Observable<PublicKeyCredentialRequestOptionsJSON> {
    const url = `${this.baseEndPoint}${this.methods.sign_in}`;
    return this.httpClient.post<PublicKeyCredentialRequestOptionsJSON>(url, data);
  }

  public signOut(): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.sign_out}`;
    return this.httpClient.delete<unknown>(url);
  }

  public verify(data: ISessionVerifyData): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.verify_2fa_credential}`;
    return this.httpClient.post<unknown>(url, data);
  }

  protected settings(): void {
    sessionsMapperSettings(this.mapper);
  }


}
