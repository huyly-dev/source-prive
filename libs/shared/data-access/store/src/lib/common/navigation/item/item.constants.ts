import { CommonNavigationItemState } from "./item.state";
import {
  CommonNavigationItemSizeEnum,
  CommonNavigationItemStatusEnum,
  CommonNavigationItemStyleEnum
} from '@data-access-common';

export const commonNavigationItemInitialState: CommonNavigationItemState = {
  status: CommonNavigationItemStatusEnum.Vertical,
  style: CommonNavigationItemStyleEnum.Inline,
  size: CommonNavigationItemSizeEnum.Cover,
  item: undefined,
  isAvatar: false,
  selected: undefined,
  expanded: false,
  haveChild: false,
  quantity: 1,
  typeCheck: 'route',
  wrapperClass: 'wrapper-common-navigation__item',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEM'
};
