import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LandingBrandState } from './brand.state';
import { landingBrandInitialState } from './brand.constants';

@Injectable()
export class LandingBrandComponentStore extends ComponentStore<LandingBrandState> {
  constructor() {
    super(landingBrandInitialState);
  }


}
