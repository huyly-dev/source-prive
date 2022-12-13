import { NgModule } from '@angular/core';
import { PriveLandingOtcShellUIHowComponent } from './containers';
import { PriveCommonIconModule } from '@ui-common-icon';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

const CONTAINERS = [PriveLandingOtcShellUIHowComponent];
const MODULES = [
  CommonModule,
  ReactiveComponentModule,
  PriveCommonIconModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingOtcShellUIHowModule {
}
