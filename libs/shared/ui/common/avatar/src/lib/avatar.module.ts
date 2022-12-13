import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveComponentModule } from '@ngrx/component';
import {
  PriveCommonAvatarComponent
} from './components';
import {
  PriveCommonAvatarShortNamePipe,
} from './pipes';

const MODULES = [
  CommonModule,
  HttpClientModule,
  ReactiveComponentModule
];

const PIPES = [
  PriveCommonAvatarShortNamePipe
];

const COMPONENTS = [
  PriveCommonAvatarComponent
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...PIPES]
})
export class PriveCommonAvatarModule {}
