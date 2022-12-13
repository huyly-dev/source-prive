import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PriveCommonButtonModule } from '@ui-common-button';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveOverlayModalComponent } from './components';
import { PriveOverlayModalIconPipe, PriveOverlayModalPackagePipe } from './pipes';
import {
  PriveOverlayModalBodyDirective,
  PriveOverlayModalFooterDirective,
  PriveOverlayModalHeaderDirective
} from './directives';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveOverlayCdkModule } from '@ui-overlay-cdk';

const COMPONENTS = [
  PriveOverlayModalComponent
];
const PIPES = [
  PriveOverlayModalIconPipe,
  PriveOverlayModalPackagePipe
];
const DIRECTIVES = [
  PriveOverlayModalBodyDirective,
  PriveOverlayModalFooterDirective,
  PriveOverlayModalHeaderDirective
];
const MODULES = [
  CommonModule,
  TranslateModule,
  PriveCommonButtonModule,
  PriveCommonIconModule,
  ReactiveComponentModule,
  PriveOverlayCdkModule
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  exports: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
  imports: [...MODULES],
})
export class PriveOverlayModalModule {}
