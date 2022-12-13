import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveCommonButtonModule } from '@ui-common-button';
import { PriveOverlayPopoverModule } from '@ui-overlay-popover';
import { PriveCommonAvatarModule } from '@ui-common-avatar';
import { PriveCommonLabelModule } from '@ui-common-label';
import {
  PriveCommonNavigationHorizontalComponent,
  PriveCommonNavigationItemComponent,
  PriveCommonNavigationVerticalComponent
} from './components';
import {
  PriveCommonNavigationSelectedPipe
} from './pipes';
import { ReactiveComponentModule } from '@ngrx/component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  PriveCommonNavigationHorizontalComponent,
  PriveCommonNavigationItemComponent,
  PriveCommonNavigationVerticalComponent
];

const PIPES = [PriveCommonNavigationSelectedPipe];

const MODULES = [
  CommonModule,
  TranslateModule,
  ReactiveComponentModule,
  PriveCommonButtonModule,
  PriveOverlayPopoverModule,
  PriveCommonAvatarModule,
  PriveCommonLabelModule,
  PriveCommonIconModule,
  RouterModule
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...PIPES]
})
export class PriveCommonNavigationModule {}
