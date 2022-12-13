import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveLandingPrivateShellUIMemberComponent } from './containers';
import { PriveCommonIconModule } from '@ui-common-icon';

const MODULES = [CommonModule, PriveCommonIconModule];

@NgModule({
  imports: [...MODULES],
  declarations: [PriveLandingPrivateShellUIMemberComponent],
  exports: [PriveLandingPrivateShellUIMemberComponent]
})
export class PriveLandingPrivateShellUiMemberModule {
}
