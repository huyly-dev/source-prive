import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  CommonIconGlobalEnum,
  CommonIconLogoEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum
} from '@data-access-common';
import { LandingDrawerComponentStore } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-drawer-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingShellUIDrawerHeaderComponent {

  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconLogo = CommonIconLogoEnum;
  public readonly CommonIconGlobal = CommonIconGlobalEnum;

  constructor(
    protected readonly store: LandingDrawerComponentStore
  ) { }

  public hiddenDrawer(): void {
    this.store.closeDrawer();
  }

}
