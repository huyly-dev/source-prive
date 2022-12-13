import { Pipe, PipeTransform } from '@angular/core';
import {
  OverlayAlertExtraStatusEnum,
  OverlayAlertStatusEnum,
  OverlayAlertStatusModel
} from '@data-access-overlay';
import {
  CommonIconTypeModel,
  CommonIconAlertEnum,
  CommonIconCheckEnum,
  CommonIconPackageEnum,
  CommonIconPackageModel,
} from '@data-access-common';
@Pipe({
  name: 'priveOverlayAlertBaseIcon'
})
export class PriveOverlayAlertBaseIconPipe implements PipeTransform {

  public transform(status: OverlayAlertStatusModel | OverlayAlertExtraStatusEnum): CommonIconTypeModel {
    switch (status) {
      case OverlayAlertStatusEnum.Warning:
        return CommonIconAlertEnum.Warning;
      case OverlayAlertStatusEnum.Error:
        return CommonIconAlertEnum.Report;
      case OverlayAlertStatusEnum.Success:
        return CommonIconCheckEnum.CheckCircle;
      case OverlayAlertExtraStatusEnum.Information:
        return CommonIconAlertEnum.InfoItalicSolid;
      default:
        return CommonIconAlertEnum.Info;
    }
  }

}

@Pipe({
  name: 'priveOverlayAlertBasePackage'
})
export class PriveOverlayAlertBasePackagePipe implements PipeTransform {

  public transform(status: OverlayAlertStatusModel): CommonIconPackageModel {
    switch (status) {
      case OverlayAlertStatusEnum.Success:
        return CommonIconPackageEnum.Check;
      default:
        return CommonIconPackageEnum.Alert;
    }
  }

}
