import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import {
  CommonIconArrowEnum,
  CommonIconPackageEnum,
  CommonIconPackageModel,
  CommonIconSizeEnum,
  CommonIconTypeModel
} from '@data-access-common';

@Component({
  selector: 'prive-landing-button-tertiary',
  templateUrl: './button-tertiary.component.html',
  styleUrls: ['./button-tertiary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PriveLandingSharedUIButtonTertiaryComponent {
  @Input()
  public content = 'Find out more';

  @Input()
  public icon: CommonIconTypeModel | undefined = CommonIconArrowEnum.ArrowForward;

  @Input()
  public iconPackage: CommonIconPackageModel = CommonIconPackageEnum.Arrow;

  @Input()
  public fullWidth = false;

  @Input()
  public extraClass = '';

  public readonly CommonIconSize = CommonIconSizeEnum;
}
