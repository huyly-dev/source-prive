export interface LandingAboutState {
  titleLinear: boolean;
  cards: LandingAboutCard[];
}

export interface LandingAboutCard {
  name: string;
  opinion: string;
  avatar: string;
  position: string;
  logo: string;
  extraClass?: string;
  markClass?: string;
}

