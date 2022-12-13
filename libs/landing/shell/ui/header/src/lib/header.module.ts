import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveLandingShellUIHeaderComponent } from './containers';
import { PriveCommonButtonModule } from '@ui-common-button';
import { PriveCommonIconModule } from '@ui-common-icon';
import { RouterModule } from '@angular/router';
import { PriveLandingSharedUIButtonModule } from '@landing-shared-ui-button';

const MODULES = [
  CommonModule,
  TranslateModule,
  ReactiveComponentModule,
  PriveCommonIconModule,
  PriveCommonButtonModule,
  PriveLandingSharedUIButtonModule,
  RouterModule
];

const CONTAINERS = [
  PriveLandingShellUIHeaderComponent
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingShellUIHeaderModule {}
