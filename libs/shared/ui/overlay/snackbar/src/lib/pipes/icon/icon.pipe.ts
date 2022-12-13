import { Pipe, PipeTransform } from '@angular/core';
import {
  OverlaySnackbarStatusEnum
} from '@data-access-overlay';
import {
  CommonIconAlertEnum,
  CommonIconCheckEnum,
  CommonIconPackageEnum,
  CommonIconPackageModel,
  CommonIconTypeModel,
} from '@data-access-common';
@Pipe({
  name: 'priveOverlaySnackbarIcon'
})
export class PriveOverlaySnackbarIconPipe implements PipeTransform {

  public transform(status: OverlaySnackbarStatusEnum): CommonIconTypeModel {
    switch (status) {
      case OverlaySnackbarStatusEnum.Warning:
        return CommonIconAlertEnum.Warning;
      case OverlaySnackbarStatusEnum.Error:
        return CommonIconAlertEnum.Report;
      case OverlaySnackbarStatusEnum.Success:
        return CommonIconCheckEnum.CheckCircle;
      case OverlaySnackbarStatusEnum.Information:
        return CommonIconAlertEnum.InfoItalicSolid;
      default:
        return CommonIconAlertEnum.Info;
    }
  }

}

@Pipe({
  name: 'priveOverlaySnackbarPackage'
})
export class PriveOverlaySnackbarPackagePipe implements PipeTransform {

  public transform(status: OverlaySnackbarStatusEnum): CommonIconPackageModel {
    switch (status) {
      case OverlaySnackbarStatusEnum.Success:
        return CommonIconPackageEnum.Check;
      default:
        return CommonIconPackageEnum.Alert;
    }
  }

}
