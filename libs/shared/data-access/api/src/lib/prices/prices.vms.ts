import { IPriceListItemVM } from './prices.interfaces';
import { AutoMap } from '@automapper/classes';

export class PriceListItemVM implements IPriceListItemVM {
  @AutoMap()
  instrument!: string;

  @AutoMap()
  base!: string;

  @AutoMap()
  counter!: string;

  @AutoMap()
  price!: number;
}
