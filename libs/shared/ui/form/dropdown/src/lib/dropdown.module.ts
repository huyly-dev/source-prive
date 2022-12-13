import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveOverlayMenuModule } from '@ui-overlay-menu';
import { PriveCommonIconModule } from '@ui-common-icon';
import {
  PriveFormDropdownMultipleComponent,
  PriveFormDropdownOptionsComponent,
  PriveFormDropdownComponent
} from './components';
import {
  PriveFormDropdownSelectedPipe
} from './pipes';
import { PriveFormDropdownOptionTemplateDirective } from './directives';

const COMPONENTS = [
  PriveFormDropdownMultipleComponent,
  PriveFormDropdownOptionsComponent,
  PriveFormDropdownComponent
];
const PIPES = [PriveFormDropdownSelectedPipe];
const DIRECTIVES = [PriveFormDropdownOptionTemplateDirective];
const MODULES = [
  CommonModule,
  PriveOverlayMenuModule,
  PriveCommonIconModule,
  ReactiveComponentModule,
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
})
export class PriveFormDropdownModule {}
