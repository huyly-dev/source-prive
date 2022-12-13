import { LandingDrawerState } from './drawer.state';

export const drawerSections = [
  {
    key: 'address',
    title: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.ADDRESS.TITLE',
    items: [
      {
        label: 'prive.support@coinhako.com',
        href: '#'
      },
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.ADDRESS.TEXT',
        href: '#'
      }
    ]
  },
  {
    key: 'service',
    title: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SERVICES.TITLE',
    items: [
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SERVICES.ITEMS.BUY_BITCOIN',
        href: 'https://www.coinhako.com/coins/BTC/SGD'
      },
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SERVICES.ITEMS.BUY_BITCOIN_CASH',
        href: 'https://www.coinhako.com/coins/BCH/SGD'
      },
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SERVICES.ITEMS.BUY_ETHER',
        href: 'ttps://www.coinhako.com/coins/ETH/SGD'
      },
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SERVICES.ITEMS.BUY_LITE_COIN',
        href: 'https://www.coinhako.com/coins/LTC/SGD'
      },
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SERVICES.ITEMS.BUY_RIPPLE',
        href: 'https://www.coinhako.com/coins/XRP/SGD'
      },
      // {
      //   label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SERVICES.ITEMS.EARN',
      //   href: '#'
      // }
    ]
  },
  {
    key: 'company',
    title: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.COMPANY.TITLE',
    items: [
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.COMPANY.ITEMS.ABOUT_US',
        href: 'https://www.coinhako.com/about-us'
      },
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.COMPANY.ITEMS.PRIVACY',
        href: 'https://www.coinhako.com/pp'
      }
    ]
  },
  {
    key: 'support',
    title: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SUPPORT.TITLE',
    items: [
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SUPPORT.ITEMS.FAQS',
        href: 'https://support.coinhako.com/hc/en-us'
      },
      {
        label: 'LIBS.LANDING.HOME.SHARED.UI.DRAWER.SUPPORT.ITEMS.HELP_DESK',
        href: 'https://support.coinhako.com/hc/en-us'
      }
    ]
  }
];

export const landingDrawerInitialState: LandingDrawerState = {
  sections: drawerSections
};
