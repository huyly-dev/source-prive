import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveCommonIconModule } from '@ui-common-icon';
import {
  PriveCommonLabelBadgeComponent,
  PriveCommonLabelLozengesComponent,
  PriveCommonLabelTagComponent
} from './components';
import { ReactiveComponentModule } from '@ngrx/component';

const COMPONENTS = [
  PriveCommonLabelLozengesComponent,
  PriveCommonLabelTagComponent,
  PriveCommonLabelBadgeComponent
];

const MODULES = [
  CommonModule,
  PriveCommonIconModule,
  ReactiveComponentModule
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS]
})
export class PriveCommonLabelModule {
}
