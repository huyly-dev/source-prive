import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PriveOverlayAlertComponent,
  PriveOverlayAlertInlineComponent,
  PriveOverlayAlertSectionComponent
} from './components';
import {
  PriveOverlayAlertBaseIconPipe,
  PriveOverlayAlertBasePackagePipe,
  PriveOverlayAlertInlineIconPipe,
  PriveOverlayAlertInlinePackagePipe,
  PriveOverlayAlertSectionIconPipe,
  PriveOverlayAlertSectionPackagePipe
} from './pipes';
import {
  PriveCommonIconModule,
} from '@ui-common-icon';
import { PriveCommonButtonModule } from '@ui-common-button';
import { PriveCommonLinkModule } from '@ui-common-link';
import { ReactiveComponentModule } from '@ngrx/component';

const COMPONENTS = [
  PriveOverlayAlertComponent,
  PriveOverlayAlertInlineComponent,
  PriveOverlayAlertSectionComponent
];
const PIPES = [
  PriveOverlayAlertBaseIconPipe,
  PriveOverlayAlertBasePackagePipe,
  PriveOverlayAlertInlineIconPipe,
  PriveOverlayAlertInlinePackagePipe,
  PriveOverlayAlertSectionIconPipe,
  PriveOverlayAlertSectionPackagePipe
];
const MODULES = [
  CommonModule,
  PriveCommonButtonModule,
  PriveCommonLinkModule,
  PriveCommonIconModule,
  ReactiveComponentModule,
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...PIPES]
})
export class PriveOverlayAlertModule {}
