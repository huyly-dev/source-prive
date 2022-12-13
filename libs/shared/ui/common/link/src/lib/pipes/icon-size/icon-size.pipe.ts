import { Pipe, PipeTransform } from '@angular/core';
import { CommonIconSizeEnum, CommonIconSizeModel, CommonLinkSizeEnum, CommonLinkSizeModel } from '@data-access-common';

@Pipe({
  name: 'priveCommonLinkIconSize'
})
export class PriveCommonLinkIconSizePipe implements PipeTransform {

  public transform(value: CommonLinkSizeModel): CommonIconSizeModel {
    switch (value) {
      case CommonLinkSizeEnum.L:
        return CommonIconSizeEnum.M;
      default:
        return CommonIconSizeEnum.S;
    }
  }

}
