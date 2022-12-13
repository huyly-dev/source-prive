import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponentModule } from '@ngrx/component';
import {
  PriveCommonIconComponent
} from './components';
import {
  PriveCommonIconPipe
} from './pipes';

const COMPONENTS = [
  PriveCommonIconComponent
];

const MODULES = [
  CommonModule,
  InlineSVGModule,
  HttpClientModule,
  ReactiveComponentModule
];
const DIRECTIVES = [];
const PIPES = [PriveCommonIconPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...PIPES]
})
export class PriveCommonIconModule {}
