import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveCommonIconModule } from '@ui-common-icon';
import {
  PriveCommonButtonComponent,
  PriveCommonButtonIconComponent,
  PriveCommonButtonSideIconComponent,
} from './components';
import {
  PriveCommonButtonIconSizePipe,
} from './pipes';
import { ReactiveComponentModule } from '@ngrx/component';
const COMPONENTS = [
  PriveCommonButtonComponent,
  PriveCommonButtonIconComponent,
  PriveCommonButtonSideIconComponent,
];
const MODULES = [
  CommonModule,
  ReactiveComponentModule,
  PriveCommonIconModule,
];
const DIRECTIVES = [

];

const PIPES = [
  PriveCommonButtonIconSizePipe,
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...PIPES],
})
export class PriveCommonButtonModule {}
