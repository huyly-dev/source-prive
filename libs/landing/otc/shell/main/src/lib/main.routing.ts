import { Route, RouterModule } from '@angular/router';
import { PriveLandingOtcShellMainComponent } from './containers';

const routes: Route[] = [
  {
    path: '',
    component: PriveLandingOtcShellMainComponent,
  }
];

export const PriveLandingOtcShellMainRoutes = RouterModule.forChild(routes);
