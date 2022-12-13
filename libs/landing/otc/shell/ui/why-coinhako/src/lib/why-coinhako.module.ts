import { NgModule } from '@angular/core';
import { PriveLandingOtcShellUIWhyCoinhakoComponent } from './containers';
import { CommonModule } from '@angular/common';
import { PriveCommonButtonModule } from '@ui-common-button';
import { PriveLandingSharedUICarouselSliderModule } from '@landing-shared-ui-carousel-slider';
import { PriveLandingSharedUiSwiperModule } from '@landing-shared-ui-swiper';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const CONTAINERS = [PriveLandingOtcShellUIWhyCoinhakoComponent];
const MODULES = [
  CommonModule,
  PriveCommonButtonModule,
  PriveLandingSharedUICarouselSliderModule,
  PriveLandingSharedUiSwiperModule,
  LazyLoadImageModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingOtcShellUIWhyCoinhakoModule {
}
