import { NgModule } from '@angular/core';
import { PriveLandingHomeShellUICoinComponent } from './containers';
import { CommonModule } from '@angular/common';
import { PriveCommonButtonModule } from '@ui-common-button';
import { PriveCommonIconModule } from '@ui-common-icon';
import { InlineSVGModule } from 'ng-inline-svg-2';

const CONTAINERS = [PriveLandingHomeShellUICoinComponent];
const MODULES = [
  CommonModule,
  PriveCommonButtonModule,
  PriveCommonIconModule,
  InlineSVGModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingHomeShellUICoinModule { }
