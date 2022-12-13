import { NgModule } from '@angular/core';
import { PriveLandingSharedUIBeachComponent } from './containers';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PriveLandingSharedUIButtonModule } from '@landing-shared-ui-button';

const CONTAINERS = [
  PriveLandingSharedUIBeachComponent
];
const MODULES = [
  CommonModule,
  TranslateModule,
  LazyLoadImageModule,
  PriveLandingSharedUIButtonModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingSharedUIBeachModule {}
