import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveOverlayMenuModule } from '@ui-overlay-menu';
import { PriveFormDropdownModule } from '@ui-form-dropdown';
import {
  PriveCommonTabComponent,
  PriveCommonTabsetComponent
} from './components';
import {
  PriveCommonTabMoreDirective
} from './directives';
import { ReactiveComponentModule } from '@ngrx/component';

const MODULES = [
  CommonModule,
  PriveFormDropdownModule,
  PriveOverlayMenuModule,
  PriveCommonIconModule,
  ReactiveComponentModule,
];

const COMPONENTS = [
  PriveCommonTabComponent,
  PriveCommonTabsetComponent
];

const DIRECTIVES = [
  PriveCommonTabMoreDirective
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES]
})
export class PriveCommonTabModule {
}
