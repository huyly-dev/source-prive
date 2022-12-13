import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { landingOtcHowInitialState } from './how.constants';
import { LandingOtcHowState } from './how.state';

@Injectable()
export class LandingOtcHowComponentStore extends ComponentStore<LandingOtcHowState> {
  public readonly vm$ = this.state$;

  constructor() {
    super(landingOtcHowInitialState);
  }
}
