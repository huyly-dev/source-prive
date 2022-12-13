import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonIconArrowEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';

@Component({
  selector: 'prive-landing-home-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PriveLandingHomeShellUIExperienceComponent {
  public readonly CommonIconArrow = CommonIconArrowEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;

  public openPrivateWealthPage(): void {
    window.open('/private-wealth-management', '_blank', 'noopener, noreferrer');
  }
}
