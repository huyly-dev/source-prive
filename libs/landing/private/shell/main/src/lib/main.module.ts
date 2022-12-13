import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveLandingPrivateShellMainRoutes } from './main.routing';
import { PriveLandingPrivateShellMainComponent } from './containers';
import { PriveLandingPrivateShellUiBannerModule } from '@landing-private-shell-ui-banner';
import { PriveLandingPrivateShellUiIndividualModule } from '@landing-private-shell-ui-individual';
import { PriveLandingPrivateShellUiMemberModule } from '@landing-private-shell-ui-member';
import { PriveLandingSharedUIFlowModule } from '@landing-shared-ui-flow';
import { PriveLandingSharedUIBrandModule } from '@landing-shared-ui-brand';
// import { PriveLandingSharedUIAboutModule } from '@landing-shared-ui-about';
import { PriveLandingSharedUIFormModule } from '@landing-shared-ui-form';
import { PriveLandingPrivateShellUiDigitalModule } from '@landing-private-shell-ui-digital';
import { PriveLandingPrivateShellUiWealthModule } from '@landing-private-shell-ui-wealth';

const MODULES = [
  CommonModule,
  PriveLandingPrivateShellMainRoutes,
  PriveLandingPrivateShellUiBannerModule,
  PriveLandingPrivateShellUiIndividualModule,
  PriveLandingPrivateShellUiMemberModule,
  PriveLandingSharedUIFlowModule,
  PriveLandingSharedUIBrandModule,
  // PriveLandingSharedUIAboutModule,
  PriveLandingSharedUIFormModule,
  PriveLandingPrivateShellUiDigitalModule,
  PriveLandingPrivateShellUiWealthModule
];

const CONTAINERS = [
  PriveLandingPrivateShellMainComponent
];

@NgModule({
  imports: [
    ...MODULES,
  ],
  declarations: [...CONTAINERS]
})
export class PriveLandingPrivateShellMainModule {
}
