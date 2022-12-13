import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveOverlayToastComponent } from './components';
import { PriveOverlayToastBaseIconPipe, PriveOverlayToastBasePackagePipe } from './pipes';
import { ReactiveComponentModule } from '@ngrx/component';

const COMPONENTS = [PriveOverlayToastComponent];
const PIPES = [
  PriveOverlayToastBaseIconPipe,
  PriveOverlayToastBasePackagePipe
];
const MODULES = [
  CommonModule,
  PriveCommonIconModule,
  TranslateModule,
  ReactiveComponentModule,
];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  exports: [...COMPONENTS, ...PIPES],
  imports: [...MODULES],
})
export class PriveOverlayToastModule {
}
