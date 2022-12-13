import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveLandingPrivateShellUIDigitalComponent } from './containers';
import { PriveLandingSharedUICarouselSliderModule } from '@landing-shared-ui-carousel-slider';
import { PriveLandingSharedUiSwiperModule } from '@landing-shared-ui-swiper';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const MODULES = [CommonModule, PriveLandingSharedUICarouselSliderModule, PriveLandingSharedUiSwiperModule, LazyLoadImageModule]

@NgModule({
  imports: [...MODULES],
  declarations: [PriveLandingPrivateShellUIDigitalComponent],
  exports: [PriveLandingPrivateShellUIDigitalComponent]
})
export class PriveLandingPrivateShellUiDigitalModule {
}
