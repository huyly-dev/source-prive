import { INavigationItem, INavigationPart } from '../interfaces';
import {
  CommonIconDeviceEnum,
  CommonIconFileEnum,
  CommonIconFinanceEnum,
  CommonIconGlobalEnum,
  CommonIconPackageEnum,
  CommonIconPersonEnum,
  CommonIconSecurityEnum
} from '../enums';

export const parts: INavigationPart[] = [
  {
    label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.PARTS.ACCOUNT.LABEL',
    items: [
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.PARTS.ACCOUNT.ITEMS.PERSONAL_INFO',
        key: 'personal-info',
        value: 'personal-info',
        icon: CommonIconPersonEnum.AccountCircleOutline,
        package: CommonIconPackageEnum.Person,
        route: 'settings/personal-info'
      },
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.PARTS.ACCOUNT.ITEMS.SECURITY',
        key: 'security',
        value: 'security',
        icon: CommonIconSecurityEnum.Security,
        package: CommonIconPackageEnum.Security,
        route: 'settings/security'
      }
    ]
  },
  {
    label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.PARTS.ORGANIZATION.LABEL',
    items: [
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.PARTS.ORGANIZATION.ITEMS.API_TOKEN',
        key: 'api-token',
        value: 'api-token',
        icon: CommonIconDeviceEnum.Api,
        package: CommonIconPackageEnum.Device,
        route: 'settings/api-token'
      },
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.PARTS.ORGANIZATION.ITEMS.BANK_ACCOUNT',
        key: 'bank-account',
        value: 'bank-account',
        icon: CommonIconFinanceEnum.AccountBalanceOutline,
        package: CommonIconPackageEnum.Finance,
        route: 'settings/bank-account'
      },
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.PARTS.ORGANIZATION.ITEMS.CRYPTO_ADDRESS',
        key: 'crypto-address',
        value: 'crypto-address',
        icon: CommonIconFileEnum.BookOutline,
        package: CommonIconPackageEnum.File,
        route: 'settings/crypto-address'
      },
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.PARTS.ORGANIZATION.ITEMS.USER_MANAGEMENT',
        key: 'user-management',
        value: 'user-management',
        icon: CommonIconPersonEnum.PeopleOutline,
        package: CommonIconPackageEnum.Person,
        route: 'settings/user-management'
      },
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.PARTS.ORGANIZATION.ITEMS.ROLE',
        key: 'role',
        value: 'role',
        icon: CommonIconPersonEnum.AccountTree,
        package: CommonIconPackageEnum.Person,
        route: 'settings/role'
      }
    ]
  }
];

export const logout: INavigationItem = {
  label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.LOGOUT',
  key: 'logout',
  value: 'logout',
  icon: CommonIconGlobalEnum.Logout,
  package: CommonIconPackageEnum.Global
};

export const items: INavigationItem[] = [
  {
    label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.REQUEST_FOR_QUOTE',
    key: 'request-for-quote',
    value: 'request-for-quote',
    route: 'request-for-quote'
  },
  {
    label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.SETTLEMENTS',
    key: 'settlements',
    value: 'settlements',
    items: [
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.WITHDRAW',
        key: 'settlements-withdraw',
        value: 'settlements-withdraw',
        route: 'withdraw'
      },
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.DEPOSIT',
        key: 'deposit',
        value: 'deposit',
        route: 'deposit'
      }
    ]
  },
  {
    label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.FUNDS',
    key: 'funds',
    value: 'funds',
    route: 'funds'
  },
  {
    label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.EARN',
    key: 'earn',
    value: 'earn',
    items: [
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.PRODUCTS',
        key: 'earn-products',
        value: 'earn-products'
      },
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.MY_PORTFOLIO',
        key: 'earn-portfolio',
        value: 'earn-portfolio'
      },
      {
        label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.HISTORY',
        key: 'earn-history',
        value: 'earn-history'
      }
    ]
  },
  {
    label: 'LIBS.SHARED.UI.COMMON.NAVIGATION.ITEMS.HISTORY',
    key: 'history',
    value: 'history',
    route: 'history'
  }
];
