export interface PriveLandingOtcWhyTradingState {
  reasons: PriveLandingOtcWhyTradingReason[];
  currentActive: number;
  isLgScreen: boolean;
  ratio: PriveLandingOtcWhyTradingRatio
}

export interface PriveLandingOtcWhyTradingReason {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  textState: 'expanded' | 'collapsed';
  imgState?: 'scaleOut' | 'scaleIn';
}

export interface PriveLandingOtcWhyTradingRatio {
  xAxis: number;
  yAxis: number;
  scaleUpRatio: number;
  scaleDownRatio: number;
}
