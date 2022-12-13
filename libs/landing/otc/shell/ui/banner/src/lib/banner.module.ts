import { NgModule } from '@angular/core';
import { PriveLandingOtcShellUIBannerComponent } from './containers';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PriveLandingSharedUIButtonModule } from '@landing-shared-ui-button';

const CONTAINERS = [PriveLandingOtcShellUIBannerComponent];
const MODULES = [
  CommonModule,
  PriveLandingSharedUIButtonModule,
  LazyLoadImageModule
];
@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingOtcShellUIBannerModule { }
