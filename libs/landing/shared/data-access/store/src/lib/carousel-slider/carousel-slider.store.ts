import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { ImgSize, LandingCarouselSliderItem, LandingCarouselSliderState } from './carousel-slider.state';
import { landingCarouselSliderInitialState } from './carousel-slider.constants';

@Injectable()
export class LandingCarouselSliderComponentStore extends ComponentStore<LandingCarouselSliderState> {
  public readonly vm$ = this.state$;

  constructor() {
    super(landingCarouselSliderInitialState);
  };

  public setCurrentActive = this.updater<[number, number]>((state, values) => {
    const [oldValue, newValue] = values;

    if (oldValue < newValue) {
      state.items[newValue].extraClass = 'right-0';
      state.items[oldValue].extraClass = 'left-0';
    } else if (oldValue > newValue) {
      state.items[newValue].extraClass = 'left-0';
      state.items[oldValue].extraClass = 'right-0';
    } else {
      state.items[newValue].extraClass = newValue > Math.floor(state.items.length / 2) ? 'right-0' : 'left-0';
    }

    const currentActive = state.currentActive === newValue ? (Math.floor(state.items.length / 2)) : newValue;

    return {
      ...state,
      currentActive
    }
  });

  public setItems = this.updater<LandingCarouselSliderItem[]>((state, items) => ({
    ...state,
    currentActive: Math.floor(items.length / 2),
    items,
  }));

  public setImgSize = this.updater<ImgSize>((state, imgSize) => ({
    ...state,
    imgSize
  }))
}
