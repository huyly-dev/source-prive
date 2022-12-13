import { landingOtcWhyTradingInitialState } from './why-trading.constants';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { PriveLandingOtcWhyTradingState } from './why-trading.state';

@Injectable()
export class LandingOtcWhyTradingComponentStore extends ComponentStore<PriveLandingOtcWhyTradingState> {
  public readonly vm$ = this.state$;

  constructor() {
    super(landingOtcWhyTradingInitialState);
  }

  public setReasonState = this.updater<number>((state, currentActive) => {

    if (state.isLgScreen) {
      state.reasons[state.currentActive].imgState = 'scaleIn';
      state.reasons[currentActive].imgState = 'scaleOut';
    }

    state.reasons[state.currentActive].textState = 'collapsed';
    state.reasons[currentActive].textState = 'expanded';

    return {
      ...state,
      currentActive
    };
  });

  public setIsLgScreen = this.updater<Pick<PriveLandingOtcWhyTradingState, 'isLgScreen' | 'ratio'>>((state, value) => {
    const {isLgScreen, ratio} = value;
    return {
      ...state,
      reasons: isLgScreen ? state.reasons.map((reason, index) => ({
        ...reason,
        imgState: index === state.currentActive ? 'scaleOut' : 'scaleIn'
      })) : state.reasons.map(reason => ({...reason, imgState: undefined})),
      ratio: ratio,
      isLgScreen: isLgScreen
    }
  });
}
