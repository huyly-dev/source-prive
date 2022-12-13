import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LandingAboutCard, LandingAboutState } from './about.state';
import { landingAboutInitialState } from './about.constants';

@Injectable()
export class LandingAboutComponentStore extends ComponentStore<LandingAboutState> {

  constructor() {
    super(landingAboutInitialState);
  }

  public readonly setCards = this.updater<LandingAboutCard[]>((state, cards) => ({
    ...state, cards
  }));

  public readonly setTitleLinear = this.updater<boolean>((state, titleLinear) => ({
    ...state, titleLinear
  }));


}
