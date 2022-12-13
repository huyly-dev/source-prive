import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MapperService } from '@data-access-service';
import { Mapper } from '@automapper/core';
import { environment } from '@resources-environments';
import { CRYPTO_ADDRESS_API_NAME } from './crypto-address.constants';
import { cryptoAddressMapperSettings, cryptoAddressMapList } from './crypto-address.mappers';
import { map, Observable } from 'rxjs';
import { ICryptoAddressList, ICryptoAddressListVM, ICryptoAddressQuery } from './crypto-address.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CryptoAddressApi {

  protected readonly endpoint = environment.api.endpoint;
  protected readonly route = environment.api.routes.crypto_address;
  protected readonly methods = environment.api.routes.crypto_address.methods;

  protected readonly mapper: Mapper;

  constructor(
    protected readonly httpClient: HttpClient,
    protected readonly mapperService: MapperService
  ) {
    this.mapper = this.mapperService.getMapper(CRYPTO_ADDRESS_API_NAME);
    this.settings();
  }


  public get baseEndPoint(): string {
    return `${this.endpoint}${this.route.endpoint}`;
  }

  /**
   * get crypto address list by query data
   * @param query: Partial<ICryptoAddressQuery>
   * @returns Observable<ICryptoAddressList> - list crypto address
   */
  public getAll(query: Partial<ICryptoAddressQuery>): Observable<ICryptoAddressList> {
    const url = `${this.baseEndPoint}${this.methods.all}`;
    const params = new HttpParams();
    params.appendAll({ ...query });
    const options = {
      params
    };
    return this.httpClient.get<ICryptoAddressListVM>(
      url,
      options
    ).pipe(
      map((data) => cryptoAddressMapList(this.mapper, data))
    );
  }

  protected settings(): void {
    cryptoAddressMapperSettings(this.mapper);
  }
}
