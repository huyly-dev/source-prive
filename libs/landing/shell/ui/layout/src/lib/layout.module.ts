import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  PriveLandingShellUILayoutComponent
} from './containers';
import { PriveLandingShellUIFooterModule } from '@landing-shell-ui-footer';
import { PriveLandingShellUIHeaderModule } from '@landing-shell-ui-header';
import { PriveLandingShellUIDrawerModule } from '@landing-shell-ui-drawer';
import { PriveCommonIconModule } from '@ui-common-icon';
import { ReactiveComponentModule } from '@ngrx/component';

const MODULES = [
  CommonModule,
  RouterModule,
  PriveLandingShellUIFooterModule,
  PriveLandingShellUIHeaderModule,
  PriveLandingShellUIDrawerModule,
  PriveCommonIconModule,
  ReactiveComponentModule
];

const CONTAINERS = [PriveLandingShellUILayoutComponent];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS],
})
export class PriveLandingShellUILayoutModule {}
