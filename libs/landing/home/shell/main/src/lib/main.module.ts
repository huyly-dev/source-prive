import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveLandingHomeShellMainRoutes } from './main.routing';
import { PriveLandingHomeShellMainComponent } from './containers';
import { PriveLandingHomeShellUIBannerModule } from '@landing-home-shell-ui-banner';
import { PriveLandingSharedUIFlowModule } from '@landing-shared-ui-flow';
import { PriveLandingSharedUIFormModule } from '@landing-shared-ui-form';
// import { PriveLandingSharedUIAboutModule } from '@landing-shared-ui-about';
import { PriveLandingSharedUIBrandModule } from '@landing-shared-ui-brand';
import { PriveLandingSharedUIMemberModule } from '@landing-shared-ui-member';
import { PriveLandingHomeShellUIExperienceModule } from '@landing-home-shell-ui-experience';
import { PriveLandingHomeShellUIOtcPreviewModule } from '@landing-home-shell-ui-otc-preview';
import { PriveLandingHomeShellUIInvestorModule } from '@landing-home-shell-ui-investor';
import { PriveLandingHomeShellUICorporateModule } from '@landing-home-shell-ui-corporate';
import { PriveLandingHomeShellUIIndividualModule } from '@landing-home-shell-ui-individual';
import { PriveLandingHomeShellUIHnwiModule } from '@landing-home-shell-ui-hnwi';
import { PriveLandingHomeShellUIInstitutionalModule } from '@landing-home-shell-ui-institutional';
import { PriveLandingHomeShellUICoinModule } from '@landing-home-shell-ui-coin';

const CONTAINERS = [PriveLandingHomeShellMainComponent];

const MODULES = [
  CommonModule,
  TranslateModule,
  ReactiveComponentModule,
  PriveLandingHomeShellMainRoutes,
  PriveLandingHomeShellUIBannerModule,
  PriveLandingSharedUIFlowModule,
  PriveLandingSharedUIFormModule,
  // PriveLandingSharedUIAboutModule,
  PriveLandingSharedUIBrandModule,
  PriveLandingSharedUIMemberModule,
  PriveLandingHomeShellUIExperienceModule,
  PriveLandingHomeShellUIOtcPreviewModule,
  PriveLandingHomeShellUICorporateModule,
  PriveLandingHomeShellUIIndividualModule,
  PriveLandingHomeShellUIHnwiModule,
  PriveLandingHomeShellUIInstitutionalModule,
  PriveLandingHomeShellUICoinModule,
  PriveLandingHomeShellUIInvestorModule
];

@NgModule({
  declarations: [...CONTAINERS],
  imports: [...MODULES],
})
export class PriveLandingHomeShellMainModule {}
