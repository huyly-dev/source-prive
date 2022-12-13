import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveLandingPrivateShellUIWealthComponent } from './containers';
import { PriveCommonIconModule } from '@ui-common-icon';

const MODULES = [CommonModule, PriveCommonIconModule]

@NgModule({
  imports: [...MODULES],
  declarations: [
    PriveLandingPrivateShellUIWealthComponent
  ],
  exports: [PriveLandingPrivateShellUIWealthComponent]
})
export class PriveLandingPrivateShellUiWealthModule {
}
