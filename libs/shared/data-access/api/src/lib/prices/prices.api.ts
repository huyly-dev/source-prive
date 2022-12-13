import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@resources-environments';
import { map, Observable } from 'rxjs';
import { MapperService } from '@data-access-service';
import { Mapper } from '@automapper/core';
import { PRICES_API_NAME } from './prices.constants';
import { IPriceListItem, IPriceListItemVM } from './prices.interfaces';
import { pricesMapList, pricesMapperSettings } from './prices.mappers';

@Injectable({
  providedIn: 'root'
})
export class PricesApi {

  public readonly endpoint = environment.api.endpoint;
  public readonly route = environment.api.routes.prices;
  public readonly methods = environment.api.routes.prices.methods;

  protected readonly mapper: Mapper;

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly mapperService: MapperService
  ) {
    this.mapper = this.mapperService.getMapper(PRICES_API_NAME);
    this.settings();
  }

  public get baseEndPoint(): string {
    return `${this.endpoint}${this.route.endpoint}`;
  }

  /**
   * get prices
   * @returns Observable<IPriceListItem[]>
   */
  public getAll(): Observable<IPriceListItem[]> {
    const url = `${this.baseEndPoint}${this.methods.all}`;
    return this.httpClient.get<IPriceListItemVM[]>(url).pipe(
      map((data) => pricesMapList(this.mapper, data))
    );
  }

  protected settings(): void {
    pricesMapperSettings(this.mapper);
  }
}
