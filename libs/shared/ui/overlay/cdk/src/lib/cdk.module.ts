import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import {
  PriveOverlayCdkComponent,
  PriveOverlayCdkNotificationComponent
} from './components';

const COMPONENTS = [
  PriveOverlayCdkComponent,
  PriveOverlayCdkNotificationComponent
];
const MODULES = [
  CommonModule,
  ReactiveComponentModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [...MODULES],
  providers: [],
})
export class PriveOverlayCdkModule {}
