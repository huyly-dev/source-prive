import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveOverlayPopoverComponent } from './components';
import { PriveOverlayPopoverDirective } from './directives';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveOverlayCdkModule } from '@ui-overlay-cdk';

const COMPONENTS = [PriveOverlayPopoverComponent];
const DIRECTIVES = [PriveOverlayPopoverDirective];
const MODULES = [
  CommonModule,
  ReactiveComponentModule,
  PriveOverlayCdkModule
];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES],
  imports: [...MODULES],
})
export class PriveOverlayPopoverModule {}
