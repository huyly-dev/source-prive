import { NgModule } from '@angular/core';
import { PriveLandingSharedUIAboutComponent } from './containers';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PriveLandingSharedUiSwiperModule } from '@landing-shared-ui-swiper';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveLandingSharedUIAboutCardComponent } from './components';

const CONTAINERS = [
  PriveLandingSharedUIAboutComponent
];
const COMPONENTS = [
  PriveLandingSharedUIAboutCardComponent
];
const MODULES = [
  CommonModule,
  TranslateModule,
  InlineSVGModule,
  LazyLoadImageModule,
  PriveLandingSharedUiSwiperModule,
  ReactiveComponentModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS, ...COMPONENTS],
  exports: [...CONTAINERS, ...COMPONENTS]
})
export class PriveLandingSharedUIAboutModule {}
