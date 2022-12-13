import { INavigationItem, INavigationPart } from '@data-access-common';

export interface CommonNavigationVerticalState {
  selected: string;
  name: string;
  org: string;
  role: string;
  parts: INavigationPart[];
  logout: INavigationItem;
  wrapperClass: string;
  wrapperLocale: string;
}
