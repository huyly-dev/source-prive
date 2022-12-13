import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveCommonTableColumnComponent, PriveCommonTableComponent } from './components';
import { PriveCommonIconModule } from '@ui-common-icon';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveCommonTableSortIconPipe } from './pipes';
import {
  PriveCommonTableColumnBodyDirective,
  PriveCommonTableColumnHeaderDirective,
  PriveCommonTableEmptyCustomDirective
} from './directives';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { TranslateModule } from '@ngx-translate/core';

const COMPONENTS = [
  PriveCommonTableComponent,
  PriveCommonTableColumnComponent,
];

const PIPES = [
  PriveCommonTableSortIconPipe
];

const DIRECTIVES = [
  PriveCommonTableColumnBodyDirective,
  PriveCommonTableColumnHeaderDirective,
  PriveCommonTableEmptyCustomDirective
];

const MODULES = [
  CommonModule,
  PriveCommonIconModule,
  ReactiveComponentModule,
  InlineSVGModule,
  TranslateModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  exports: [...COMPONENTS, ...PIPES, ...DIRECTIVES]
})
export class PriveCommonTableModule {
}
