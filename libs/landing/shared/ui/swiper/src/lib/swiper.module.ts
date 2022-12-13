import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PriveLandingSharedUISwiperComponent
} from './containers';
import { SwiperModule } from 'swiper/angular';
import { ReactiveComponentModule } from '@ngrx/component';

const MODULES = [CommonModule, SwiperModule, ReactiveComponentModule];

const COMPONENTS = [PriveLandingSharedUISwiperComponent];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [PriveLandingSharedUISwiperComponent]
})
export class PriveLandingSharedUiSwiperModule {
}
