import { NgModule } from '@angular/core';
import { PriveLandingHomeShellUICorporateComponent } from './containers';
import { CommonModule } from '@angular/common';
import { PriveLandingSharedUIBeachModule } from '@landing-shared-ui-beach';
import { PriveCommonIconModule } from '@ui-common-icon';

const CONTAINERS = [PriveLandingHomeShellUICorporateComponent];
const MODULES = [
  CommonModule,
  PriveLandingSharedUIBeachModule,
  PriveCommonIconModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingHomeShellUICorporateModule { }
