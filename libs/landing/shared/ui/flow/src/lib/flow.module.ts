import { NgModule } from '@angular/core';
import { PriveLandingSharedUIFlowComponent } from './containers';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const CONTAINERS = [
  PriveLandingSharedUIFlowComponent
];
const MODULES = [
  CommonModule,
  TranslateModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS]
})
export class PriveLandingSharedUIFlowModule {}
