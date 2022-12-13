import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PriveMainShellUILayoutModule } from '@main-shell-ui-layout';
import { PriveMainShellMainRoutes } from './main.routing';
import { PriveMainShellMainComponent } from './containers';
import { CookieModule } from 'ngx-cookie';

const CONTAINERS = [
  PriveMainShellMainComponent
];

const MODULES = [
  PriveMainShellUILayoutModule,
  PriveMainShellMainRoutes,
  CookieModule.forRoot()
];

@NgModule({
  declarations: [...CONTAINERS],
  imports: [...MODULES],
  exports: [RouterModule],
})
export class PriveMainShellMainModule { }
