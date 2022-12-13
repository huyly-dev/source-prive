import { Pipe, PipeTransform } from '@angular/core';
import {
  CommonIconSizeModel,
  CommonIconSizeEnum,
  CommonButtonSizeModel,
  CommonButtonSizeEnum
} from '@data-access-common';

@Pipe({
  name: 'priveCommonButtonIconSize'
})
export class PriveCommonButtonIconSizePipe implements PipeTransform {

  public transform(value: CommonButtonSizeModel): CommonIconSizeModel {
    switch (value) {
      case CommonButtonSizeEnum.M:
        return CommonIconSizeEnum.S;
      case CommonButtonSizeEnum.L:
        return CommonIconSizeEnum.S;
      case CommonButtonSizeEnum.XL:
        return CommonIconSizeEnum.M;
      default:
        return CommonIconSizeEnum.XS;
    }
  }

}
