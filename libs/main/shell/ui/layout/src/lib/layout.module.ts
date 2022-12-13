import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { PriveMainShellUILayoutComponent } from './containers';
import { PriveLandingShellUILayoutModule } from '@landing-shell-ui-layout';
// import { PriveAuthShellUILayoutModule } from '@auth';
// import { PriveOrgsShellUILayoutModule } from '@orgs';
// import { PriveDocumentationShellUILayoutModule } from '@documentation';

const MODULES = [
  CommonModule,
  RouterModule,
  ReactiveComponentModule,
  PriveLandingShellUILayoutModule,
  // PriveAuthShellUILayoutModule,
  // PriveOrgsShellUILayoutModule,
  // PriveDocumentationShellUILayoutModule
];

const CONTAINERS = [PriveMainShellUILayoutComponent];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS],
  exports: [...CONTAINERS],
})
export class PriveMainShellUILayoutModule {}
