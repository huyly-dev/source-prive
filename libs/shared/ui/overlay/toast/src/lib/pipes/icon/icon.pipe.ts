import { Pipe, PipeTransform } from '@angular/core';
import {
  OverlayToastStatusEnum,
  OverlayToastStatusModel
} from '@data-access-overlay';
import {
  CommonIconAlertEnum,
  CommonIconCheckEnum,
  CommonIconPackageEnum,
  CommonIconPackageModel,
  CommonIconTypeModel,
} from '@data-access-common';

@Pipe({
  name: 'priveOverlayToastBaseIcon'
})
export class PriveOverlayToastBaseIconPipe implements PipeTransform {

  public transform(status: OverlayToastStatusModel): CommonIconTypeModel {
    switch (status) {
      case OverlayToastStatusEnum.Error  :
        return CommonIconAlertEnum.Report;
      case OverlayToastStatusEnum.Success:
        return CommonIconCheckEnum.CheckCircle;
      default:
        return CommonIconAlertEnum.Info;
    }
  }

}

@Pipe({
  name: 'priveOverlayToastBasePackage'
})
export class PriveOverlayToastBasePackagePipe implements PipeTransform {

  public transform(status: OverlayToastStatusModel): CommonIconPackageModel {
    switch (status) {
      case OverlayToastStatusEnum.Success:
        return CommonIconPackageEnum.Check;
      default:
        return CommonIconPackageEnum.Alert;
    }
  }

}
