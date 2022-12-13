import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import {
  CommonIconArrowEnum,
  CommonIconPackageEnum,
  CommonIconPackageModel, CommonIconSizeEnum,
  CommonIconTypeModel
} from '@data-access-common';

@Component({
  selector: 'prive-landing-button-ghost',
  templateUrl: './button-ghost.component.html',
  styleUrls: ['./button-ghost.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingSharedUIButtonGhostComponent {
  @Input()
  public content = 'Find out more';

  @Input()
  public icon: CommonIconTypeModel = CommonIconArrowEnum.ArrowForward;

  @Input()
  public iconPackage: CommonIconPackageModel = CommonIconPackageEnum.Arrow;

  public readonly CommonIconSize = CommonIconSizeEnum;
}
