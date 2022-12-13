import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import {
  CommonButtonSizeEnum,
  CommonButtonStatusEnum,
  CommonIconLogoEnum,
  CommonIconNavigationEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum
} from '@data-access-common';
import { LandingHeaderComponentStore } from '@landing-shared-data-access-store';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'prive-landing-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    LandingHeaderComponentStore
  ]
})
export class PriveLandingShellUIHeaderComponent {

  public readonly state$ = this.store.state$;

  public readonly CommonButtonSize = CommonButtonSizeEnum;
  public readonly CommonButtonStatus = CommonButtonStatusEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconLogo = CommonIconLogoEnum;
  public readonly CommonIconNavigation = CommonIconNavigationEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;

  constructor(
      protected readonly store: LandingHeaderComponentStore,
      @Inject(DOCUMENT) protected readonly documentRef: Document
  ) {
  }

  public showDrawer(): void {
    this.store.showDrawer();
  }

  public login(): void {
    window.open('/users/sessions/sign_in', '_self', 'noopener, noreferrer');
  }

  public scrollToLandingForm(): void {
    this.documentRef.getElementById('landingForm')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }

}
