import { Route, RouterModule } from '@angular/router';
import { PriveMainShellMainComponent } from './containers';
import { PriveMainLayoutEnum } from '@main-shared-data-access-variable';
import { PriveLandingGuard } from '@landing-shared-utils-guard';
// import { PriveOrgsGuard } from '@orgs';

const routes: Route[] = [
  {
    path: '',
    component: PriveMainShellMainComponent,
    children: [
      // {
      //   path: 'login',
      //   loadChildren: () => import('@auth-login').then((m) => m.PriveAuthLoginShellMainModule),
      //   data: {
      //     type: PriveMainLayoutEnum.AUTH
      //   },
      // },
      // {
      //   path: 'forgot-password',
      //   loadChildren: () => import('@auth-forgot-password').then((m) => m.PriveAuthForgotPasswordShellMainModule),
      //   data: {
      //     type: PriveMainLayoutEnum.AUTH
      //   },
      // },
      // {
      //   path: 'resend-unlock-instruction',
      //   loadChildren: () => import('@auth-resend-unlock-instruction').then((m) => m.PriveAuthResendUnlockInstructionShellMainModule),
      //   data: {
      //     type: PriveMainLayoutEnum.AUTH
      //   },
      // },
      // {
      //   path: 'settings',
      //   loadChildren: () => import('@orgs-settings').then((m) => m.PriveOrgsSettingsShellMainModule),
      //   data: {
      //     type: PriveMainLayoutEnum.ORGS
      //   },
      //   canLoad: [PriveOrgsGuard]
      // },
      {
        path: 'otc-trading',
        loadChildren: () => import('@landing-otc-shell-main').then((m) => m.PriveLandingOtcShellMainModule),
        data: {
          type: PriveMainLayoutEnum.LANDING
        },
        canLoad: [PriveLandingGuard]
      },
      {
        path: 'private-wealth-management',
        loadChildren: () => import('@landing-private-shell-main').then((m) => m.PriveLandingPrivateShellMainModule),
        data: {
          type: PriveMainLayoutEnum.LANDING
        },
        canLoad: [PriveLandingGuard]
      },
      {
        path: 'crypto-custodian',
        loadChildren: () => import('@landing-crypto-shell-main').then((m) => m.PriveLandingCryptoShellMainModule),
        data: {
          type: PriveMainLayoutEnum.LANDING
        },
        canLoad: [PriveLandingGuard]
      },
      {
        path: '',
        loadChildren: () => import('@landing-home-shell-main').then((m) => m.PriveLandingHomeShellMainModule),
        data: {
          type: PriveMainLayoutEnum.LANDING
        },
        canLoad: [PriveLandingGuard]
      },
    ]
  }
];

export const PriveMainShellMainRoutes = RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' });
