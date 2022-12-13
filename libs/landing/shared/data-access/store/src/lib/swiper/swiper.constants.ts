import { LandingSwiperState } from './swiper.state';

export const landingSwiperInitialState = <T>(): LandingSwiperState<T> => ({
  currentActive: 0,
  items: []
});
