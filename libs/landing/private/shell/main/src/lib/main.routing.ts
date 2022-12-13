import { Route, RouterModule } from '@angular/router';
import { PriveLandingPrivateShellMainComponent } from './containers';

const routes: Route[] = [
  {
    path: '',
    component: PriveLandingPrivateShellMainComponent,
  }
];

export const PriveLandingPrivateShellMainRoutes = RouterModule.forChild(routes);
