import { Pipe, PipeTransform } from '@angular/core';
import { CommonAvatarTypeEnum, CommonAvatarTypeModel } from '@data-access-common';

@Pipe({
  name: 'priveCommonAvatarShortName'
})
export class PriveCommonAvatarShortNamePipe implements PipeTransform {

  public transform(value: string | undefined, type: CommonAvatarTypeModel = CommonAvatarTypeEnum.StartEnd): string {

    if (!value || (value && value.length === 0)) {
      return '';
    }

    const words = value.split(' ').map((e) => e.charAt(0).toString().toUpperCase());
    if (type === CommonAvatarTypeEnum.StartEnd) {
      return words[0] + (words.length > 0 ? words[words.length - 1] : '');
    } else {
      return (words.length > 0 ? words[words.length - 2] : '') + words[words.length - 1];
    }
  }
}
