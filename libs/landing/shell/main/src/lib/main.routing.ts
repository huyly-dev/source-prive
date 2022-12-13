import { Route, RouterModule } from '@angular/router';
import { PriveLandingShellMainComponent } from './containers';

const routes: Route[] = [
  {
    path: '',
    component: PriveLandingShellMainComponent,
    children: [
      {
        path: 'otc-trading',
        loadChildren: () => import('@landing-otc-shell-main').then((m) => m.PriveLandingOtcShellMainModule),
      },
      {
        path: 'private-wealth-management',
        loadChildren: () => import('@landing-private-shell-main').then((m) => m.PriveLandingPrivateShellMainModule),
      },
      {
        path: 'crypto-custodian',
        loadChildren: () => import('@landing-crypto-shell-main').then((m) => m.PriveLandingCryptoShellMainModule),
      },
      {
        path: '**',
        loadChildren: () => import('@landing-home-shell-main').then((m) => m.PriveLandingHomeShellMainModule),
      },
    ],
  }
];

export const PriveLandingShellMainRoutes = RouterModule.forRoot(routes, { enableTracing: true });
