import { NgModule } from '@angular/core';
import { PriveLandingHomeShellUIInvestorComponent } from './containers';
import { CommonModule } from '@angular/common';
import { PriveLandingSharedUIBeachModule } from '@landing-shared-ui-beach';

const CONTAINERS = [PriveLandingHomeShellUIInvestorComponent];
const MODULES = [
  CommonModule,
  PriveLandingSharedUIBeachModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingHomeShellUIInvestorModule { }
