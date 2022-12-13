import { IPriceListItem } from './prices.interfaces';
import { AutoMap } from '@automapper/classes';

export class PriceListItem implements IPriceListItem {
  @AutoMap()
  instrument!: string;

  @AutoMap()
  base!: string;

  @AutoMap()
  counter!: string;

  @AutoMap()
  price!: number;
}
