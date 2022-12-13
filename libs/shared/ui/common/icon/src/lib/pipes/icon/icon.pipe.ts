import { Pipe, PipeTransform } from '@angular/core';
import {
  IconHelper,
  CommonIconPackageModel,
  CommonIconTypeModel
} from '@data-access-common';

@Pipe({
  name: 'priveCommonIcon',
  pure: true
})
export class PriveCommonIconPipe implements PipeTransform {

  public transform(icon: CommonIconTypeModel | undefined, packpage: CommonIconPackageModel | undefined): string {
    if (!icon) {
      IconHelper.throwRequiredError();
    }
    return `prive-assets/icons/${packpage || 'global'}/${icon || 'skeleton'}.svg`;
  }

}
