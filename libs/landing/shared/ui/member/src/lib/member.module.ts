import { NgModule } from '@angular/core';
import { PriveLandingSharedUIMemberComponent } from './containers';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

const CONTAINERS = [
  PriveLandingSharedUIMemberComponent
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
export class PriveLandingSharedUIMemberModule {}
