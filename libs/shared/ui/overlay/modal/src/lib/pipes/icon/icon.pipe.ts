import { Pipe, PipeTransform } from '@angular/core';
import {
  OverlayModalStatusEnum,
  OverlayModalStatusModel
} from '@data-access-overlay';
import {
  CommonIconTypeModel,
  CommonIconAlertEnum,
  CommonIconCheckEnum,
  CommonIconPackageEnum,
  CommonIconPackageModel,
} from '@data-access-common';

@Pipe({
  name: 'priveOverlayModalIcon'
})
export class PriveOverlayModalIconPipe implements PipeTransform {

  public transform(status: OverlayModalStatusModel): CommonIconTypeModel {
    switch (status) {
      case OverlayModalStatusEnum.Warning:
        return CommonIconAlertEnum.Warning;
      case OverlayModalStatusEnum.Success:
        return CommonIconCheckEnum.CheckCircle;
      case OverlayModalStatusEnum.Error:
        return CommonIconAlertEnum.Report;
      default:
        return CommonIconAlertEnum.Info;
    }
  }

}

@Pipe({
  name: 'modalPackage'
})
export class PriveOverlayModalPackagePipe implements PipeTransform {

  public transform(status: OverlayModalStatusModel): CommonIconPackageModel {
    switch (status) {
      case OverlayModalStatusEnum.Success:
        return CommonIconPackageEnum.Check;
      default:
        return CommonIconPackageEnum.Alert;
    }
  }

}
