import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveFormInputComponent } from './components';
import {
  PriveFormInputPrefixDirective,
  PriveFormInputSuffixDirective,
  PriveFormInputDirective
} from './directives';
import { PriveFormInputIconSizePipe } from './pipes';

const COMPONENTS = [PriveFormInputComponent];
const DIRECTIVES = [
  PriveFormInputPrefixDirective,
  PriveFormInputSuffixDirective,
  PriveFormInputDirective
];
const PIPES = [PriveFormInputIconSizePipe];
const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PriveCommonIconModule,
  ReactiveComponentModule
];
@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES
  ]
})
export class PriveFormInputModule {}
