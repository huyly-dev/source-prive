import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { PriveCommonIconModule } from '@ui-common-icon';
import { PriveOverlayMenuModule } from '@ui-overlay-menu';
import { PriveFormDropdownModule } from '@ui-form-dropdown';
import { PriveCommonPaginationComponent } from './components';

const MODULES = [
  CommonModule,
  TranslateModule,
  ReactiveComponentModule,
  PriveFormDropdownModule,
  PriveOverlayMenuModule,
  PriveCommonIconModule,
];
const COMPONENTS = [PriveCommonPaginationComponent];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...COMPONENTS],
})
export class PriveCommonPaginationModule {}
