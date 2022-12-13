import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriveLandingCryptoShellMainRoutes } from './main.routing';
import { PriveLandingCryptoShellMainComponent } from './containers';

const MODULES = [
  CommonModule,
  PriveLandingCryptoShellMainRoutes
];

const CONTAINERS = [
  PriveLandingCryptoShellMainComponent
];

@NgModule({
  imports: [...MODULES],
  declarations: [...CONTAINERS]
})
export class PriveLandingCryptoShellMainModule {}
