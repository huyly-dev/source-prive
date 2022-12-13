import { INavigationItem, INavigationPart } from '@data-access-common';

export interface CommonNavigationHorizontalState {
  selected: string | undefined;
  selectedOrg: string | undefined;
  selectedOrgData: INavigationItem | undefined;
  isLogin: boolean;
  orgs: INavigationItem[];
  showDropdownOrg: boolean;
  items: INavigationItem[];
  parts: INavigationPart[];
  logout: INavigationItem;
  wrapperClass: string;
  wrapperLocale: string;
}
