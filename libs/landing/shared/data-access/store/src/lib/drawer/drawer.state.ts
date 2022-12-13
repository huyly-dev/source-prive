export interface LandingDrawerState {
  sections: LandingDrawerSection[];
}

export interface LandingDrawerSection {
  key: string;
  title: string;
  items: LandingDrawerSectionItem[];
}

export interface LandingDrawerSectionItem {
  label: string;
  href: string;
}
