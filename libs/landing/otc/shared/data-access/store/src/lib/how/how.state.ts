export interface LandingOtcHowState {
  stepItems: LandingOtcHowStepItem[];
  stepActivated: number;
};

export interface LandingOtcHowStepItem {
  step: number;
  description: string;
}
