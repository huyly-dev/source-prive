import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonIconCheckEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';

@Component({
  selector: 'prive-landing-form-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PriveLandingSharedUIFormNextComponent {
  @Input()
  public titleLinear = false;

  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconCheck = CommonIconCheckEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
}
