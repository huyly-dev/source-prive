import { Route, RouterModule } from '@angular/router';
import { PriveLandingHomeShellMainComponent } from './containers';

const routes: Route[] = [
  {
    path: '',
    component: PriveLandingHomeShellMainComponent,
  }
];

export const PriveLandingHomeShellMainRoutes = RouterModule.forChild(routes);
