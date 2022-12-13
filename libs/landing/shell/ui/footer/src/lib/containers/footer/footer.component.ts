import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonIconLogoEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';
import { LandingFooterComponentStore } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    LandingFooterComponentStore
  ]
})
export class PriveLandingShellUIFooterComponent {

  public readonly state$ = this.store.state$;

  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconLogo = CommonIconLogoEnum;

  constructor(
    protected readonly store: LandingFooterComponentStore
  ) { }
}
