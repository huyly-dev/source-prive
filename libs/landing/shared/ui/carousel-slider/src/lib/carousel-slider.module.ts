import { NgModule } from '@angular/core';
import { PriveLandingSharedUICarouselSliderComponent } from './containers';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';

const CONTAINERS = [
  PriveLandingSharedUICarouselSliderComponent
];
const MODULES = [
  CommonModule,
  TranslateModule,
  ReactiveComponentModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingSharedUICarouselSliderModule {
}
