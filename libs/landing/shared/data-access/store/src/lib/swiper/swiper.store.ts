import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LandingSwiperState } from './swiper.state';
import { landingSwiperInitialState } from './swiper.constants';

@Injectable()
export class PriveLandingSwiperStore<T> extends ComponentStore<LandingSwiperState<T>> {

  constructor() {
    super(landingSwiperInitialState<T>());
  }

  public setItems = this.updater<T[]>((state, items) => ({
    ...state, items
  }));

  public setCurrentActive = this.updater<number>((state, currentActive) => ({
    ...state,
    currentActive
  }));
}
