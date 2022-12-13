import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PriveCommonLinkModule } from '@ui-common-link';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveOverlaySnackbarComponent } from './components';
import { PriveOverlaySnackbarIconPipe, PriveOverlaySnackbarPackagePipe } from './pipes';
import { ReactiveComponentModule } from '@ngrx/component';

const COMPONENTS = [PriveOverlaySnackbarComponent];
const MODULES = [
  CommonModule,
  TranslateModule,
  PriveCommonLinkModule,
  PriveCommonIconModule,
  ReactiveComponentModule,
];
const PIPES = [PriveOverlaySnackbarIconPipe, PriveOverlaySnackbarPackagePipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  exports: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
})
export class PriveOverlaySnackbarModule {}
