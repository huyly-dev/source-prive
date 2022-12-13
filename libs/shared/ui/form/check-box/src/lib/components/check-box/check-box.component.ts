import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input, Optional,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  FormCheckBoxStatusEnum,
  FormCheckBoxStatusModel
} from '@data-access-form';
import {
  CommonIconCheckEnum,
  CommonIconGlobalEnum,
  CommonIconPackageEnum
} from '@data-access-common';
import {
  FormCheckBoxComponentStore
} from '@data-access-store';

@Component({
  selector: 'prive-form-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PriveFormCheckBoxComponent),
      multi: true
    },
    FormCheckBoxComponentStore
  ]
})
export class PriveFormCheckBoxComponent implements ControlValueAccessor {

  @Output()
  public readonly statusChange: EventEmitter<FormCheckBoxStatusModel> = new EventEmitter<FormCheckBoxStatusModel>();

  @Input()
  @Optional()
  public set status(value: FormCheckBoxStatusModel | boolean | undefined) {
    if (typeof value === 'boolean') {
      this.writeValue(value ? FormCheckBoxStatusEnum.Checked : FormCheckBoxStatusEnum.UnCheck);
      return;
    }

    if (value) {
      this.writeValue(value);
    }
  };

  @Input()
  @Optional()
  public set canSwitchIndeterminate(canSwitchIndeterminate: boolean | undefined) {
    if (typeof canSwitchIndeterminate === 'boolean') {
      this.store.updateCanSwitchIndeterminate(canSwitchIndeterminate);
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
  public set label(label: string | undefined) {
    if (label) {
      this.store.updateLabel(label);
    }
  };

  public readonly FormCheckBoxStatus = FormCheckBoxStatusEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconCheck = CommonIconCheckEnum;
  public readonly CommonIconGlobal = CommonIconGlobalEnum;

  public readonly state$ = this.store.state$;

  protected onChange!: (status: FormCheckBoxStatusModel) => void;
  protected onTouched!: () => void;

  constructor(
    protected readonly store: FormCheckBoxComponentStore
  ) {
  }

  public writeValue(status: FormCheckBoxStatusModel): void {
    this.store.updateStatus(status);
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

  public toggle(): void {
    this.store.toggle((state) => {
      if (!state.disabled) {
        let status = state.status;
        switch (status) {
          case FormCheckBoxStatusEnum.UnCheck:
            status = state.canSwitchIndeterminate ? FormCheckBoxStatusEnum.Indeterminate : FormCheckBoxStatusEnum.Checked;
            break;
          case FormCheckBoxStatusEnum.Checked:
            status = FormCheckBoxStatusEnum.UnCheck;
            break;
          case FormCheckBoxStatusEnum.Indeterminate:
            status = FormCheckBoxStatusEnum.Checked;
            break;
        }
        this.statusChange.emit(status);
        this.writeValue(status);

        this.onTouched && this.onTouched();
        this.onChange && this.onChange(status);
      }
    });


  }
}
