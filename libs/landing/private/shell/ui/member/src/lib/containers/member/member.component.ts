import { Component } from '@angular/core';
import {
  CommonIconCheckEnum,
  CommonIconGlobalEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum
} from '@data-access-common';

@Component({
  selector: 'prive-landing-private-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class PriveLandingPrivateShellUIMemberComponent {
  public readonly IconPackage = CommonIconPackageEnum;
  public readonly IconSize = CommonIconSizeEnum;
  public readonly IconCheck = CommonIconCheckEnum;
  public readonly IconGlobal = CommonIconGlobalEnum;
}
