import {
  CommonNavigationItemSizeModel,
  CommonNavigationItemStatusModel,
  CommonNavigationItemStyleModel,
  INavigationItem
} from '@data-access-common';

export interface CommonNavigationItemState {
  status: CommonNavigationItemStatusModel;
  style: CommonNavigationItemStyleModel;
  size: CommonNavigationItemSizeModel;
  item: INavigationItem | undefined;
  typeCheck: 'route' | 'selected';
  isAvatar: boolean;
  selected: string | undefined;
  expanded: boolean;
  haveChild: boolean;
  quantity: number;
  wrapperClass: string;
  wrapperLocale: string;
}
