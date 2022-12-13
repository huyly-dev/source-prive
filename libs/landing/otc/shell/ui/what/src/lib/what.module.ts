import { NgModule } from '@angular/core';
import { PriveLandingOtcShellUIWhatComponent } from './containers';
import { CommonModule } from '@angular/common';
import { PriveLandingSharedUIButtonModule } from '@landing-shared-ui-button';

const CONTAINERS = [PriveLandingOtcShellUIWhatComponent];
const MODULES = [
  CommonModule,
  PriveLandingSharedUIButtonModule
];
@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingOtcShellUIWhatModule { }
