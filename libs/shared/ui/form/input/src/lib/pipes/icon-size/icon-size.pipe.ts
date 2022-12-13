import { Pipe, PipeTransform } from '@angular/core';
import {
  FormInputSizeEnum,
  FormInputSizeModel
} from '@data-access-form';
import {
  CommonIconSizeModel,
  CommonIconSizeEnum,
} from '@data-access-common';

@Pipe({
  name: 'priveFormInputIconSize'
})
export class PriveFormInputIconSizePipe implements PipeTransform {

  public transform(value: FormInputSizeModel): CommonIconSizeModel {
    switch (value) {
      case FormInputSizeEnum.M:
        return CommonIconSizeEnum.S;
      case FormInputSizeEnum.L:
        return CommonIconSizeEnum.S;
      case FormInputSizeEnum.XL:
        return CommonIconSizeEnum.M;
      default:
        return CommonIconSizeEnum.XS;
    }
  }

}
