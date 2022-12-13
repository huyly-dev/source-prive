import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@resources-environments';
import { Observable } from 'rxjs';
import { IOrganizationData, IOrganizationDataVM } from './organizations.interfaces';
import { MapperService } from '@data-access-service';
import { Mapper } from '@automapper/core';
import { ORGANIZATIONS_API_NAME } from './organizations.constants';
import { organizationsMapData, organizationsMapperSettings } from './organizations.mappers';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsApi {

  public readonly endpoint = environment.api.endpoint;
  public readonly route = environment.api.routes.organizations;
  public readonly methods = environment.api.routes.organizations.methods;

  protected readonly mapper: Mapper;

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly mapperService: MapperService
  ) {
    this.mapper = this.mapperService.getMapper(ORGANIZATIONS_API_NAME);
    this.settings();
  }

  public get baseEndPoint(): string {
    return `${this.endpoint}${this.route.endpoint}`;
  }

  /**
   * send contact form
   * @param data: IOrganizationData
   * @returns Observable<unknown>
   */
  public contact(data: IOrganizationDataVM): Observable<unknown> {
    const url = `${this.baseEndPoint}${this.methods.contact}`;
    // const vm = organizationsMapData(this.mapper, data) as IOrganizationDataVM;
    return this.httpClient.post<unknown>(url, data);
  }

  protected settings(): void {
    organizationsMapperSettings(this.mapper);
  }
}
