import { NgModule } from '@angular/core';
import { PriveOverlayTooltipComponent } from './components';
import { PriveOverlayTooltipDirective } from './directives';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveComponentModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';

const MODULES = [
  CommonModule,
  TranslateModule,
  ReactiveComponentModule,
];
const COMPONENTS = [PriveOverlayTooltipComponent];
const DIRECTIVES = [PriveOverlayTooltipDirective];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class PriveOverlayTooltipModule {
}
