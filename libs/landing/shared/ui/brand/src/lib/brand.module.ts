import { NgModule } from '@angular/core';
import { PriveLandingSharedUIBrandComponent } from './containers';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PriveLandingSharedUIBrandItemComponent } from './components';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { ReactiveComponentModule } from '@ngrx/component';

const CONTAINERS = [
  PriveLandingSharedUIBrandComponent
];
const COMPONENTS = [
  PriveLandingSharedUIBrandItemComponent
];
const MODULES = [
  CommonModule,
  TranslateModule,
  InlineSVGModule,
  ReactiveComponentModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS, ...COMPONENTS],
  exports: [...CONTAINERS, ...COMPONENTS]
})
export class PriveLandingSharedUIBrandModule {}
