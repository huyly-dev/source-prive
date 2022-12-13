import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LandingOtcHowComponentStore } from '@landing-otc-shared-data-access-store';
import { CommonIconCheckEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';

@Component({
  selector: 'prive-landing-otc-how',
  templateUrl: './how.component.html',
  styleUrls: ['./how.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LandingOtcHowComponentStore]
})
export class PriveLandingOtcShellUIHowComponent {
  public readonly vm$ = this.store.vm$;

  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconCheck = CommonIconCheckEnum;

  constructor(
    protected readonly store: LandingOtcHowComponentStore
  ) { }
}
