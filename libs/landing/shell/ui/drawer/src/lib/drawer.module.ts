import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveCommonButtonModule } from '@ui-common-button';
import { PriveLandingShellUIDrawerComponent } from './containers';
import {
  PriveLandingShellUIDrawerActionComponent,
  PriveLandingShellUIDrawerContactComponent,
  PriveLandingShellUIDrawerHeaderComponent
} from './components';
import { PriveLandingSharedUIButtonModule } from '@landing-shared-ui-button';

const MODULES = [
  CommonModule,
  TranslateModule,
  ReactiveComponentModule,
  PriveCommonButtonModule,
  PriveCommonIconModule,
  PriveLandingSharedUIButtonModule
];

const CONTAINERS = [PriveLandingShellUIDrawerComponent];
const COMPONENTS = [
  PriveLandingShellUIDrawerActionComponent,
  PriveLandingShellUIDrawerContactComponent,
  PriveLandingShellUIDrawerHeaderComponent
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS, ...COMPONENTS],
  exports: [...CONTAINERS, ...COMPONENTS]
})
export class PriveLandingShellUIDrawerModule {}
