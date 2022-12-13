import { Pipe, PipeTransform } from '@angular/core';
import {
  CommonIconSizeModel,
  CommonIconSizeEnum,
  CommonFilterSizeModel,
  CommonFilterSizeEnum
} from '@data-access-common';

@Pipe({
  name: 'priveCommonFilterIconSize'
})
export class PriveCommonFilterIconSizePipe implements PipeTransform {

  public transform(value: CommonFilterSizeModel): CommonIconSizeModel {
    switch (value) {
      case CommonFilterSizeEnum.M:
        return CommonIconSizeEnum.S;
      case CommonFilterSizeEnum.L:
        return CommonIconSizeEnum.S;
      case CommonFilterSizeEnum.XL:
        return CommonIconSizeEnum.M;
      default:
        return CommonIconSizeEnum.XS;
    }
  }

}
