import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveCommonIconModule } from '@ui-common-icon';
import {
  PriveFormCheckBoxComponent,
} from './components';
import { ReactiveComponentModule } from '@ngrx/component';

const COMPONENTS = [PriveFormCheckBoxComponent];
const MODULES = [
  CommonModule,
  PriveCommonIconModule,
  ReactiveComponentModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [...MODULES]
})
export class PriveFormCheckBoxModule {}
