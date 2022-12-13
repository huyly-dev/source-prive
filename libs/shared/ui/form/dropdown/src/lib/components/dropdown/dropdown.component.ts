import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  forwardRef,
  Input, Optional,
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
  FormDropdownComponentStore
} from '@data-access-store';
import { PriveFormDropdownOptionTemplateDirective } from '../../directives';

@Component({
  selector: 'prive-form-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PriveFormDropdownComponent),
      multi: true
    },
    FormDropdownComponentStore
  ]
})
export class PriveFormDropdownComponent<TData> implements ControlValueAccessor {

  @ContentChild(PriveFormDropdownOptionTemplateDirective, { static: true, read: TemplateRef })
  public readonly template!: TemplateRef<HTMLElement>;

  @Output()
  public readonly selectedChange: EventEmitter<IDropdownOption<TData>> = new EventEmitter<IDropdownOption<TData>>();

  @Input()
  @Optional()
  public set options(options: IDropdownOption<TData>[] | undefined) {
    if (options) {
      this.store.updateOptions(options);
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

  protected onChange!: (selected: string) => void;
  protected onTouched!: () => void;

  constructor(
    protected readonly store: FormDropdownComponentStore<TData>
  ) {
  }

  public writeValue(selected: string): void {
    this.store.updateSelected(selected);
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

  public selectOption(option: IDropdownOption<TData>): void {
    if (!option.disabled) {
      this.selectedChange.emit(option);
      this.writeValue(option.key);

      this.onChange && this.onChange(option.key);
      this.focus(false);
    }
  }

  public focus(disabled: boolean): void {
    if (!disabled) {
      this.onTouched && this.onTouched();
    }
  }

}
