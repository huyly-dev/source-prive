import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveCommonIconModule } from '@ui-common-icon';

import {
  PriveCommonFilterComponent,
} from './components';
import {
  PriveCommonFilterIconSizePipe
} from './pipes';
const COMPONENTS = [
  PriveCommonFilterComponent
];
const MODULES = [
  CommonModule,
  PriveCommonIconModule,
  ReactiveComponentModule,
];
const DIRECTIVES = [

];

const PIPES = [
  PriveCommonFilterIconSizePipe
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...PIPES],
})
export class PriveCommonFilterModule {}
