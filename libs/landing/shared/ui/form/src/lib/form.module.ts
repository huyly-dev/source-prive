import { NgModule } from '@angular/core';
import { PriveLandingSharedUIFormComponent } from './containers';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PriveLandingSharedUIFormContactComponent, PriveLandingSharedUIFormNextComponent } from './components';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveLandingSharedUIButtonModule } from '@landing-shared-ui-button';
import { PriveFormInputModule } from '@ui-form-input';
import { PriveFormCheckBoxModule } from '@ui-form-check-box';
import { RECAPTCHA_SETTINGS, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from '@resources-environments';
import { ReactiveComponentModule } from '@ngrx/component';
import { ReactiveFormsModule } from '@angular/forms';
import { PriveOverlayTooltipModule } from '@ui-overlay-tooltip';

const CONTAINERS = [
  PriveLandingSharedUIFormComponent
];
const COMPONENTS = [
  PriveLandingSharedUIFormContactComponent,
  PriveLandingSharedUIFormNextComponent
];
const MODULES = [
  CommonModule,
  TranslateModule,
  PriveCommonIconModule,
  PriveLandingSharedUIButtonModule,
  PriveFormInputModule,
  PriveFormCheckBoxModule,
  RecaptchaModule,
  ReactiveComponentModule,
  ReactiveFormsModule,
  PriveOverlayTooltipModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS, ...COMPONENTS],
  exports: [...CONTAINERS, ...COMPONENTS],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.siteKey,
      } as RecaptchaSettings,
    }
  ]
})
export class PriveLandingSharedUIFormModule {}
