import { AutoMap } from '@automapper/classes';
import { IEarnApyListItem } from './earns.interfaces';

export class EarnApyListItem implements IEarnApyListItem {
  @AutoMap()
  currency!: string;

  @AutoMap()
  interest!: number;
}
