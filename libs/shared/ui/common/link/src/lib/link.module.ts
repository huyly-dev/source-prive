import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveCommonIconModule } from '@ui-common-icon';

import {
  PriveCommonLinkComponent
} from './components';
import {
  PriveCommonLinkIconSizePipe
} from './pipes';

const COMPONENTS = [
  PriveCommonLinkComponent
];
const MODULES = [
  CommonModule,
  PriveCommonIconModule,
  ReactiveComponentModule
];
const DIRECTIVES = [];

const PIPES = [
  PriveCommonLinkIconSizePipe
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...PIPES]
})
export class PriveCommonLinkModule {
}
