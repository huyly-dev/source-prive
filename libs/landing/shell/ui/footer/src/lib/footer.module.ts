import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveLandingShellUIFooterComponent } from './containers';
import {
  PriveLandingShellUIFooterContactComponent,
  PriveLandingShellUIFooterCopyRightComponent,
  PriveLandingShellUIFooterExtraComponent,
  PriveLandingShellUIFooterSocialComponent
} from './components';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { PriveCommonIconModule } from '@ui-common-icon';

const MODULES = [
  CommonModule,
  TranslateModule,
  ReactiveComponentModule,
  InlineSVGModule,
  PriveCommonIconModule
];

const CONTAINERS = [
  PriveLandingShellUIFooterComponent
];

const COMPONENTS = [
  PriveLandingShellUIFooterContactComponent,
  PriveLandingShellUIFooterCopyRightComponent,
  PriveLandingShellUIFooterExtraComponent,
  PriveLandingShellUIFooterSocialComponent
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS, ...COMPONENTS],
  exports: [...CONTAINERS, ...COMPONENTS]
})
export class PriveLandingShellUIFooterModule {}
