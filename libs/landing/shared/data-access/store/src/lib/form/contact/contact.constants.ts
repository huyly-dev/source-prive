import { LandingFormContactState, LandingFormContactTypeEnum } from './contact.state';

export const landingFormContactInitialState: LandingFormContactState = {
  type: LandingFormContactTypeEnum.DEFAULT,
  showError: false
};

export const DELAY_TIME = 3000;
