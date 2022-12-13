import { NgModule } from '@angular/core';
import { PriveLandingHomeShellUIOtcPreviewComponent } from './containers';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PriveLandingSharedUIButtonModule } from '@landing-shared-ui-button';

const CONTAINERS = [PriveLandingHomeShellUIOtcPreviewComponent];
const MODULES = [
  CommonModule,
  LazyLoadImageModule,
  PriveLandingSharedUIButtonModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingHomeShellUIOtcPreviewModule {
}
