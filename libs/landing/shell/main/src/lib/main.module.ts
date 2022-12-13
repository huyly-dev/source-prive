import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriveLandingShellUILayoutModule } from '@landing-shell-ui-layout';
import { PriveLandingShellMainRoutes } from './main.routing';
import {
  PriveLandingShellMainComponent
} from './containers';

const CONTAINERS = [
  PriveLandingShellMainComponent
];

const MODULES = [
  PriveLandingShellUILayoutModule,
  PriveLandingShellMainRoutes,
];

@NgModule({
  declarations: [...CONTAINERS],
  imports: [...MODULES],
  exports: [RouterModule],
})
export class PriveLandingShellMainModule {}
