import { Route, RouterModule } from '@angular/router';
import { PriveLandingCryptoShellMainComponent } from './containers';

const routes: Route[] = [
  {
    path: '',
    component: PriveLandingCryptoShellMainComponent,
  }
];

export const PriveLandingCryptoShellMainRoutes = RouterModule.forChild(routes);
