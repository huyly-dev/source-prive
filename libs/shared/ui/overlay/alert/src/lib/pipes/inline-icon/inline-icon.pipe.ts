import { Pipe, PipeTransform } from '@angular/core';
import {
  OverlayAlertStatusEnum,
  OverlayAlertStatusModel
} from '@data-access-overlay';
import {
  CommonIconAlertEnum,
  CommonIconCheckEnum,
  CommonIconPackageEnum,
  CommonIconPackageModel,
  CommonIconTypeModel,
} from '@data-access-common';
@Pipe({
  name: 'priveOverlayAlertInlineIcon'
})
export class PriveOverlayAlertInlineIconPipe implements PipeTransform {

  public transform(status: OverlayAlertStatusModel): CommonIconTypeModel {
    switch (status) {
      case OverlayAlertStatusEnum.Warning:
        return CommonIconAlertEnum.Warning;
      case OverlayAlertStatusEnum.Error:
        return CommonIconAlertEnum.Report;
      case OverlayAlertStatusEnum.Success:
        return CommonIconCheckEnum.CheckCircle;
      default:
        return CommonIconAlertEnum.Info;
    }
  }

}

@Pipe({
  name: 'priveOverlayAlertInlinePackage'
})
export class PriveOverlayAlertInlinePackagePipe implements PipeTransform {

  public transform(status: OverlayAlertStatusModel): CommonIconPackageModel {
    switch (status) {
      case OverlayAlertStatusEnum.Success:
        return CommonIconPackageEnum.Check;
      default:
        return CommonIconPackageEnum.Alert;
    }
  }

}
