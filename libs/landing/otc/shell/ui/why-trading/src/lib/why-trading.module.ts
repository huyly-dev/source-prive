import { NgModule } from '@angular/core';
import { PriveLandingOtcShellUIWhyTradingComponent } from './containers';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

const CONTAINERS = [PriveLandingOtcShellUIWhyTradingComponent];
const MODULES = [
  CommonModule,
  ReactiveComponentModule
];
@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingOtcShellUIWhyTradingModule { }
