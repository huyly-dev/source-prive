export interface LandingFooterState {
  socials: LandingFooterSocial[];
  contact: LandingFooterSection[];
  extra: LandingFooterSection[];
}

export interface LandingFooterSocial {
  key: string;
  src: string;
  href: string;
}

export interface LandingFooterSection {
  key: string;
  title: string;
  items: LandingFooterSectionItem[];
}

export interface LandingFooterSectionItem {
  label: string;
  href: string;
}
