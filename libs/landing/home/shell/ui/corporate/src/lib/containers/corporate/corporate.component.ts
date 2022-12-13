import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonIconArrowEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';

@Component({
  selector: 'prive-landing-home-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingHomeShellUICorporateComponent {
  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconArrow = CommonIconArrowEnum;

  public openPrivateWealthPage(): void {
    window.open('/private-wealth-management', '_blank', 'noopener, noreferrer');
  }
}
