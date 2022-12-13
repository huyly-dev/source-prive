import { AutoMap } from '@automapper/classes';
import { IEarnApyListItemVM } from './earns.interfaces';

export class EarnApyListItemVM implements IEarnApyListItemVM {
  @AutoMap()
  currency!: string;

  @AutoMap()
  interest!: number;
}
