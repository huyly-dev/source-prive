import { NgModule } from '@angular/core';
import { PriveLandingHomeShellUIExperienceComponent } from './containers';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveLandingSharedUIButtonModule } from '@landing-shared-ui-button';

const CONTAINERS = [
  PriveLandingHomeShellUIExperienceComponent
];
const MODULES = [
  CommonModule,
  TranslateModule,
  PriveCommonIconModule,
  PriveLandingSharedUIButtonModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingHomeShellUIExperienceModule {}
