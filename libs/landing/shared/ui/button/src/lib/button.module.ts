import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PriveLandingSharedUIButtonGhostComponent, } from './components/button-ghost/button-ghost.component';
import { PriveLandingSharedUIButtonPrimaryComponent, } from './components/button-primary/button-primary.component';
import { PriveLandingSharedUIButtonTertiaryComponent, } from './components/button-tertiary/button-tertiary.component';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveCommonIconModule } from '@ui-common-icon';
// TODO: fix import path

const COMPONENTS = [
  PriveLandingSharedUIButtonGhostComponent,
  PriveLandingSharedUIButtonPrimaryComponent,
  PriveLandingSharedUIButtonTertiaryComponent
];
const MODULES = [
  CommonModule,
  TranslateModule,
  InlineSVGModule,
  ReactiveComponentModule,
  PriveCommonIconModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class PriveLandingSharedUIButtonModule {
}
