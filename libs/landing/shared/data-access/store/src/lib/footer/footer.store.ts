import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LandingFooterState } from './footer.state';
import { landingFooterInitialState } from './footer.constants';

@Injectable()
export class LandingFooterComponentStore extends ComponentStore<LandingFooterState> {
  constructor() {
    super(landingFooterInitialState);
  }

}
