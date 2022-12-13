import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveFormRadioComponent } from './components';
import { ReactiveComponentModule } from '@ngrx/component';

const MODULES = [
  CommonModule,
  ReactiveComponentModule,
];
const COMPONENTS = [PriveFormRadioComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
})
export class PriveFormRadioModule {}
