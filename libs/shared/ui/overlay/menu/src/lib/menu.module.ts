import { NgModule } from '@angular/core';
import { PriveOverlayMenuComponent } from './components';
import { PriveOverlayMenuDirective } from './directives';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';

const COMPONENTS = [
  PriveOverlayMenuComponent
];
const DIRECTIVES = [
  PriveOverlayMenuDirective
];
const MODULES = [
  CommonModule,
  ReactiveComponentModule,
];
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class PriveOverlayMenuModule {}
