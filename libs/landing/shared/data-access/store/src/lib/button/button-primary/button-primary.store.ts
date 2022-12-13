import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LandingButtonState } from './button.state';
import { landingButtonInitialState } from './button.constants';

@Injectable()
export class LandingButtonComponentStore extends ComponentStore<LandingButtonState> {
  constructor() {
    super(landingButtonInitialState);
  }


}
