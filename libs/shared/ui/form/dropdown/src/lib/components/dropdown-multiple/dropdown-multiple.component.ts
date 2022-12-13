import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input,
  Optional,
  Output,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  FormDropdownDirectionModel,
  FormDropdownOptionTypeEnum,
  FormDropdownSizeEnum,
  FormDropdownSizeModel,
  IDropdownOption
} from '@data-access-form';
import {
  OverlayCdkPositionEnum
} from '@data-access-overlay';
import {
  CommonIconArrowEnum,
  CommonIconCheckEnum,
  CommonIconPackageEnum,
  CommonIconPackageModel,
  CommonIconSizeEnum,
  CommonIconTypeModel
} from '@data-access-common';
import {
  FormDropdownMultipleComponentStore
} from '@data-access-store';
import { PriveFormDropdownOptionTemplateDirective } from '../../directives';

@Component({
  selector: 'prive-form-dropdown-multiple',
  templateUrl: './dropdown-multiple.component.html',
  styleUrls: ['./dropdown-multiple.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PriveFormDropdownMultipleComponent),
      multi: true
    },
    FormDropdownMultipleComponentStore
  ]
})
export class PriveFormDropdownMultipleComponent<TData> implements ControlValueAccessor {

  @ContentChild(PriveFormDropdownOptionTemplateDirective, { static: true })
  public readonly template!: TemplateRef<any>;

  @Output()
  public readonly selectedChange: EventEmitter<IDropdownOption<TData>[]> = new EventEmitter<IDropdownOption<TData>[]>();

  @Input()
  @Optional()
  public set options(options: IDropdownOption<TData>[] | undefined) {
    if (options) {
      this.store.updateOptions(options);
    }
  };

  @Input()
  @Optional()
  public set selected(selected: string[] | undefined) {
    if (selected) {
      this.store.updateSelected(selected);
    }
  };

  @Input()
  @Optional()
  public set direction(direction: FormDropdownDirectionModel | undefined) {
    if (direction) {
      this.store.updateDirection(direction);
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

  @Input()
  @Optional()
  public set placeholder(placeholder: string | undefined) {
    if (placeholder) {
      this.store.updatePlaceholder(placeholder);
    }
  };

  @Input()
  @Optional()
  public set label(label: string | undefined) {
    if (label) {
      this.store.updateLabel(label);
    }
  };

  @Input()
  @Optional()
  public set icon(icon: CommonIconTypeModel | undefined) {
    if (icon) {
      this.store.updateIcon(icon);
    }
  };

  @Input()
  @Optional()
  public set package(iconPackage: CommonIconPackageModel | undefined) {
    if (iconPackage) {
      this.store.updateIconPackage(iconPackage);
    }
  };

  public set expanded(expanded: boolean) {
    this.store.updateExpanded(expanded);
  };

  public readonly OverlayCdkPosition = OverlayCdkPositionEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconArrow = CommonIconArrowEnum;
  public readonly CommonIconCheck = CommonIconCheckEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly FormDropdownSize = FormDropdownSizeEnum;
  public readonly FormDropdownOptionType = FormDropdownOptionTypeEnum;

  public readonly state$ = this.store.state$;

  protected onChange!: (selected: string[]) => void;
  protected onTouched!: () => void;

  constructor(
    protected readonly store: FormDropdownMultipleComponentStore<TData>
  ) {
  }

  public writeValue(selected: string[]): void {
    this.store.updateSelected(selected ? selected : []);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(disabled: boolean): void {
    this.store.updateDisabled(disabled);
  }

  public selectOption(options: IDropdownOption<TData>[]): void {
    const selected = options.map((e) => e.key);
    this.selectedChange.emit(options);
    this.writeValue(selected);

    this.onChange && this.onChange(selected);
    this.focus();
  }

  public focus(): void {
    this.onTouched && this.onTouched();
  }
}
