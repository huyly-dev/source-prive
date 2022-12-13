export interface LandingBrandState {
  couples: LandingBrandCouple[];
}

export interface LandingBrandCouple {
  brands: LandingBrandItem[];
  extraClass?: string;
}

export interface LandingBrandItem {
  key: string;
  src: string;
  active?: boolean;
  extraClass?: string;
}
