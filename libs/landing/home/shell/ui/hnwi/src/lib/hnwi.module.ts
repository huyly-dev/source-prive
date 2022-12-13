import { NgModule } from '@angular/core';
import { PriveLandingHomeShellUIHnwiComponent } from './containers';
import { CommonModule } from '@angular/common';
import { PriveCommonButtonModule } from '@ui-common-button';
import { LazyLoadImageModule } from 'ng-lazyload-image';

const CONTAINERS = [PriveLandingHomeShellUIHnwiComponent];
const MODULES = [
  CommonModule,
  PriveCommonButtonModule,
  LazyLoadImageModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingHomeShellUIHnwiModule { }
