import { Pipe, PipeTransform } from '@angular/core';
import {
  FormDropdownOptionConditionEnum,
  FormDropdownOptionTypeEnum,
  IDropdownOption,
  IDropdownOptionArgs
} from '@data-access-form';

@Pipe({
  name: 'priveFormDropdownSelected',
  pure: true
})
export class PriveFormDropdownSelectedPipe implements PipeTransform {

  public transform<TData>(
    option: IDropdownOption<TData>,
    args: IDropdownOptionArgs
  ): boolean {
    if (args.type === FormDropdownOptionTypeEnum.Single) {
      const check = args.selected === option.key;
      return args.condition === FormDropdownOptionConditionEnum.Item ? check : !check;
    } else {
      const check = args.selectedList.includes(option.key);
      return args.condition === FormDropdownOptionConditionEnum.Item ? check : !check;
    }
  }

}
