import { NgModule } from '@angular/core';
import { PriveLandingHomeShellUIIndividualComponent } from './containers';
import { CommonModule } from '@angular/common';
import { PriveCommonButtonModule } from '@ui-common-button';
import { PriveLandingSharedUIBeachModule } from '@landing-shared-ui-beach';

const CONTAINERS = [PriveLandingHomeShellUIIndividualComponent];
const MODULES = [
  CommonModule,
  PriveCommonButtonModule,
  PriveLandingSharedUIBeachModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingHomeShellUIIndividualModule { }
