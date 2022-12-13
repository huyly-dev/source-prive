import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveCommonIconModule } from '@ui-common-icon';

import {
PriveCommonToggleComponent
} from './components';
import { ReactiveComponentModule } from '@ngrx/component';

const COMPONENTS = [
PriveCommonToggleComponent
];
const MODULES = [
  CommonModule,
  PriveCommonIconModule,
  ReactiveComponentModule
];
const DIRECTIVES = [

];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
})
export class PriveCommonToggleModule {}
