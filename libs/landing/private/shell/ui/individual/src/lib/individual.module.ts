import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveLandingPrivateShellUIIndividualComponent } from './containers';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveLandingSharedUIBeachModule } from '@landing-shared-ui-beach';

const MODULES = [CommonModule, PriveCommonIconModule, PriveLandingSharedUIBeachModule];

@NgModule({
  imports: [...MODULES],
  declarations: [PriveLandingPrivateShellUIIndividualComponent],
  exports: [PriveLandingPrivateShellUIIndividualComponent]
})
export class PriveLandingPrivateShellUiIndividualModule {
}
