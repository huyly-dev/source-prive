import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@resources-environments';
import { map, Observable } from 'rxjs';
import { IEarnApyListItem, IEarnApyListItemVM } from './earns.interfaces';
import { MapperService } from '@data-access-service';
import { Mapper } from '@automapper/core';
import { EARNS_API_NAME } from './earns.constants';
import { earnsMapList, earnsMapperSettings } from './earns.mappers';

@Injectable({
  providedIn: 'root'
})
export class EarnsApi {

  public readonly endpoint = environment.api.endpoint;
  public readonly route = environment.api.routes.earns;
  public readonly methods = environment.api.routes.earns.methods;

  protected readonly mapper: Mapper;

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly mapperService: MapperService
  ) {
    this.mapper = this.mapperService.getMapper(EARNS_API_NAME);
    this.settings();
  }

  public get baseEndPoint(): string {
    return `${this.endpoint}${this.route.endpoint}`;
  }

  /**
   * get earn apy list
   * @returns Observable<IEarnApyListItem[]> - list earn apy
   */
  public getApyList(): Observable<IEarnApyListItem[]> {
    const url = `${this.baseEndPoint}${this.methods.apy_list}`;
    return this.httpClient.get<IEarnApyListItemVM[]>(url).pipe(
      map((data) => earnsMapList(this.mapper, data))
    );
  }

  protected settings(): void {
    earnsMapperSettings(this.mapper);
  }
}
