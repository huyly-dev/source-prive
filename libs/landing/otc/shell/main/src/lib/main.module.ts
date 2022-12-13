import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveLandingOtcShellMainRoutes } from './main.routing';
import { PriveLandingOtcShellMainComponent } from './containers';
import { PriveLandingOtcShellUIBannerModule } from '@landing-otc-shell-ui-banner';
import { PriveLandingOtcShellUIWhatModule } from '@landing-otc-shell-ui-what';
import { PriveLandingOtcShellUIHowModule } from '@landing-otc-shell-ui-how';
import { PriveLandingOtcShellUIWhyCoinhakoModule } from '@landing-otc-shell-ui-why-coinhako';
import { PriveLandingOtcShellUIWhyTradingModule } from '@landing-otc-shell-ui-why-trading';
import { PriveLandingSharedUIFlowModule } from '@landing-shared-ui-flow';
import { PriveLandingSharedUIBrandModule } from '@landing-shared-ui-brand';
// import { PriveLandingSharedUIAboutModule } from '@landing-shared-ui-about';
import { PriveLandingSharedUIFormModule } from '@landing-shared-ui-form';

const MODULES = [
  CommonModule,
  PriveLandingOtcShellMainRoutes,
  PriveLandingOtcShellUIBannerModule,
  PriveLandingOtcShellUIWhatModule,
  PriveLandingOtcShellUIHowModule,
  PriveLandingOtcShellUIWhyCoinhakoModule,
  PriveLandingOtcShellUIWhyTradingModule,
  PriveLandingSharedUIFlowModule,
  PriveLandingSharedUIBrandModule,
  // PriveLandingSharedUIAboutModule,
  PriveLandingSharedUIFormModule
];

const CONTAINERS = [
  PriveLandingOtcShellMainComponent,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingOtcShellMainModule {
}
