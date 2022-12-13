import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {
  FormDropdownOptionConditionEnum,
  FormDropdownOptionTypeEnum,
  FormDropdownOptionTypeModel,
  FormDropdownSizeEnum,
  FormDropdownSizeModel,
  IDropdownOption
} from '@data-access-form';
import {
  CommonIconCheckEnum,
  CommonIconLoadingEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum
} from '@data-access-common';
import {
  FormDropdownOptionsState,
  FormDropdownOptionsComponentStore
} from '@data-access-store';

@Component({
  selector: 'prive-form-dropdown-options',
  templateUrl: './dropdown-options.component.html',
  styleUrls: ['./dropdown-options.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    FormDropdownOptionsComponentStore
  ]
})
export class PriveFormDropdownOptionsComponent<TData> {

  @Output()
  public readonly selectedChange: EventEmitter<IDropdownOption<TData>> = new EventEmitter<IDropdownOption<TData>>();

  @Output()
  public readonly selectedListChange: EventEmitter<IDropdownOption<TData>[]> = new EventEmitter<IDropdownOption<TData>[]>();

  @Input()
  @Optional()
  public template!: TemplateRef<HTMLElement>;

  @Input()
  @Optional()
  public set options(options: IDropdownOption<TData>[] | undefined) {
    if (options) {
      this.store.updateOptions(options);
    }
  };

  @Input()
  @Optional()
  public set size(size: FormDropdownSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  };

  @Input()
  @Optional()
  public set selected(selected: string | undefined | undefined) {
    if (selected) {
      this.store.updateSelected(selected);
    }
  };

  @Input()
  @Optional()
  public set selectedList(selectedList: string[] | undefined) {
    if (selectedList) {
      this.store.updateSelectedList(selectedList);
    }
  };

  @Input()
  @Optional()
  public set type(type: FormDropdownOptionTypeModel | undefined) {
    if (type) {
      this.store.updateType(type);
    }
  };

  @Input()
  @Optional()
  public set loading(loading: boolean | undefined) {
    if (typeof loading === 'boolean') {
      this.store.updateLoading(loading);
    }
  };

  @Input()
  @Optional()
  public set disabled(disabled: boolean | undefined) {
    if (typeof disabled === 'boolean') {
      this.store.updateDisabled(disabled);
    }
  };

  public readonly FormDropdownSize = FormDropdownSizeEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconCheck = CommonIconCheckEnum;
  public readonly CommonIconLoading = CommonIconLoadingEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly FormDropdownOptionCondition = FormDropdownOptionConditionEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: FormDropdownOptionsComponentStore<TData>
  ) {
  }


  public selectOption(option: IDropdownOption<TData>, event: MouseEvent): void {
    if (!option.disabled) {
      this.store.updateCdkClick(event);
      this.store.selectOption((state) => {
        if (state.type === FormDropdownOptionTypeEnum.Single) {
          this.setSingle(option);
        } else {
          this.setList(option, state);
        }
      });
    }
  }

  public setSingle(option: IDropdownOption<TData>): void {
    if (!option.disabled) {
      this.selectedChange.emit(option);
      this.store.updateSelected(option.key);
    }
  }

  public setList(option: IDropdownOption<TData>, state: FormDropdownOptionsState<TData>): void {
    if (!option.disabled) {
      let selectedList = state.selectedList;
      const check = selectedList.includes(option.key);
      if (check) {
        selectedList = selectedList.filter((e) => e !== option.key);
      } else {
        selectedList.push(option.key);
      }
      this.selectedListChange.emit(state.options.filter((op) => selectedList.includes(op.key)));
      this.store.updateSelectedList(selectedList);
    }
  }
}
