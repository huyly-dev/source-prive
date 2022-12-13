import { Pipe, PipeTransform } from '@angular/core';
import {
  OverlayAlertExtraStatusEnum,
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
  name: 'priveOverlayAlertSectionIcon'
})
export class PriveOverlayAlertSectionIconPipe implements PipeTransform {

  public transform(status: OverlayAlertStatusModel): CommonIconTypeModel {
    switch (status) {
      case OverlayAlertStatusEnum.Warning:
        return CommonIconAlertEnum.Warning;
      case OverlayAlertStatusEnum.Success:
        return CommonIconCheckEnum.CheckCircle;
      case OverlayAlertStatusEnum.Error:
        return CommonIconAlertEnum.Report;
      case OverlayAlertExtraStatusEnum.Information:
        return CommonIconAlertEnum.InfoItalicSolid;
      default:
        return CommonIconAlertEnum.Info;
    }
  }

}

@Pipe({
  name: 'priveOverlayAlertSectionPackage'
})
export class PriveOverlayAlertSectionPackagePipe implements PipeTransform {

  public transform(status: OverlayAlertStatusModel): CommonIconPackageModel {
    switch (status) {
      case OverlayAlertStatusEnum.Success:
        return CommonIconPackageEnum.Check;
      default:
        return CommonIconPackageEnum.Alert;
    }
  }

}
