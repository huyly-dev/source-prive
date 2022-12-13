import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonButtonSizeEnum, CommonButtonStatusEnum } from '@data-access-common';

@Component({
  selector: 'prive-landing-home-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingHomeShellUIInvestorComponent {
  public readonly CommonButtonSize = CommonButtonSizeEnum;
  public readonly CommonButtonStatus = CommonButtonStatusEnum;

  public openPrivateWealthPage(): void {
    window.open('/private-wealth-management', '_blank', 'noopener, noreferrer');
  }
}
