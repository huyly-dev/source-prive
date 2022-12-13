import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Optional,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  IRadioOption,
  FormRadioDirectionModel
} from '@data-access-form';
import {
  FormRadioComponentStore
} from '@data-access-store';

@Component({
  selector: 'prive-form-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PriveFormRadioComponent),
      multi: true
    },
    FormRadioComponentStore,
  ]
})
export class PriveFormRadioComponent<TData> implements ControlValueAccessor {
  @Output()
  public readonly selectedChange: EventEmitter<IRadioOption<TData>> = new EventEmitter<IRadioOption<TData>>();

  @Input()
  @Optional()
  public set options(options: IRadioOption<TData>[] | undefined) {
    if (options) {
      this.store.updateOptions(options);
    }
  };

  @Input()
  @Optional()
  public set selected(selected: string | undefined) {
    this.store.updateSelected(selected);
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
  public set direction(direction: FormRadioDirectionModel | undefined) {
    if (direction) {
      this.store.updateDirection(direction);
    }
  };

  public readonly state$ = this.store.state$;

  protected onChange!: (selected: string) => void;
  protected onTouched!: () => void;

  constructor(
    protected readonly store: FormRadioComponentStore<TData>
  ) { }

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

  public selectOption(option: IRadioOption<TData>): void {
    if (!option.disabled) {
      this.selectedChange.emit(option);
      this.writeValue(option.key);

      this.onChange && this.onChange(option.key);
      this.onTouched && this.onTouched();
    }
  }
}
