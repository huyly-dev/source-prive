import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Optional,
  Output,
  Self
} from '@angular/core';
import { FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap, take, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FormInputTypeModel } from '@data-access-form';
import { FormInputComponentStore } from '@data-access-store';

@Directive({
  selector: 'input[priveFormInput], textarea[priveFormInput]',
  exportAs: 'priveFormInput'
})
export class PriveFormInputDirective implements OnInit {

  @Output()
  public readonly valueChange: EventEmitter<string | number | undefined> = new EventEmitter<string | number | undefined>();

  @Output()
  public readonly focusedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public readonly touchedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public readonly disabledChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public readonly dirtyChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public readonly requiredChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public readonly readonlyChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public readonly validChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  public readonly typeChange: EventEmitter<FormInputTypeModel | string> = new EventEmitter<FormInputTypeModel | string>();

  @Input()
  @Optional()
  public set value(value: string | number | undefined) {
    this.element.setAttribute('value', value ? value + '' : '');
    this.store.updateValue(value);
    this.valueChange.emit(value);
  }

  @Input()
  @Optional()
  public set disabled(disabled: boolean) {
    this.element.setAttribute('disabled', disabled + '');
    this.store.updateDisabled(disabled);
    this.disabledChange.emit(disabled);
  }

  @Input()
  @Optional()
  public set required(required: boolean) {
    this.element.setAttribute('required', required + '');
    this.store.updateRequired(required);
    this.requiredChange.emit(required);
  }

  @Optional()
  @Input()
  public set readonly(readonly: boolean) {
    this.element.setAttribute('readonly', readonly + '');
    this.store.updateReadonly(readonly);
    this.readonlyChange.emit(readonly);
  }

  @Optional()
  @Input()
  public set isTouched(isTouched: boolean) {
    this.store.updateTouched(isTouched);
    this.touchedChange.emit(isTouched);
    if (!!this.ngControl && !!this.ngControl.control) {
      if (isTouched) {
        this.ngControl.control.markAsTouched();
      } else {
        this.ngControl.control.markAsUntouched();
      }
    }
  };

  @Optional()
  @Input()
  public set isDirty(isDirty: boolean) {
    this.store.updateDirty(isDirty);
    this.dirtyChange.emit(isDirty);
    if (!!this.ngControl && !!this.ngControl.control && isDirty) {
      this.ngControl.control.markAsDirty();
    }
  };

  @Optional()
  @Input()
  public set hardValid(hardValid: boolean) {
    this.store.updateHardValid(hardValid);
  };

  @Optional()
  @Input()
  public set type(type: FormInputTypeModel | string) {
    this.element.setAttribute('type', type);
    this.store.updateInputType(type);
    this.typeChange.emit(type);
  };

  @Optional()
  @Input()
  public set timeSleep(timeSleep: number) {
    this.store.updateTimeSleep(timeSleep);
  };

  @Optional()
  @Input()
  public set placeholder(placeholder: string) {
    this.element.setAttribute('placeholder', placeholder);
    this.store.updatePlaceholder(placeholder);
  };

  @Optional()
  @Input()
  public set id(id: string) {
    this.element.setAttribute('id', id);
    this.store.updateInputType(id);
  };

  @Optional()
  @Input()
  public set class(customClass: string) {
    this.store.updateCustomClass(customClass);
  };

  @Optional()
  @Input()
  public set name(name: string) {
    this.element.setAttribute('name', name);
    this.store.updateName(name);
  };

  @Optional()
  @Input()
  public set maxlength(maxlength: string | number) {
    this.element.setAttribute('maxlength', maxlength + '');
    this.store.updateMaxlength(maxlength);
  };

  @Optional()
  @Input()
  public set minlength(minlength: string | number) {
    this.element.setAttribute('minlength', minlength + '');
    this.store.updateMinlength(minlength);
  };

  public set nodeName(nodeName: 'input' | 'textarea' | string) {
    this.store.updateName(nodeName);
  };

  public get controlValueChanges$(): Observable<string | number> | null {
    return this.ngControl ? this.ngControl.valueChanges : null;
  }

  public get element(): HTMLInputElement | HTMLTextAreaElement {
    return this.elementRef.nativeElement;
  }

  constructor(
    protected readonly store: FormInputComponentStore,
    protected readonly elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    @Optional() @Self() protected readonly ngControl: NgControl,
    @Optional() protected readonly parentForm: NgForm,
    @Optional() protected readonly parentFormGroup: FormGroupDirective
  ) {
  }

  public ngOnInit(): void {
    this.store.updateNodeName(this.element.nodeName.toLowerCase());
    if (this.ngControl) {
      this.store.updateValid(!!this.ngControl.valid);
      this.validChange.emit(!!this.ngControl.valid);
    }
    this.listenControlValueChanges();
  }

  public resetClass(className: string): void {
    this.store.resetClass((value) => {
      this.element.className = `${value || ''} ${className}`;
    });
  }

  public focus(options?: FocusOptions): void {
    this.element.focus(options);
  }

  public setHeight(height: string): void {
    this.element.style.height = height;
  }

  protected listenControlValueChanges(): void {
    if (this.controlValueChanges$) {
      this.controlValueChanges$
        .pipe(
          switchMap((value) =>
            this.store.state$
              .pipe(
                take(1),
                switchMap((state) =>
                  of(state).pipe(
                    debounceTime(state.timeSleep),
                    distinctUntilChanged(),
                    tap(() => {
                      this.store.updateValue(value);
                      this.valueChange.emit(value);
                      this.store.updateValid(!!this.ngControl.valid);
                      this.validChange.emit(!!this.ngControl.valid);
                      this.store.updateDirty(true);
                      this.dirtyChange.emit(true);
                    })
                  )
                )
              )
          ),
        )
        .subscribe();
    } else {
      this.store.updateValid(true);
      this.validChange.emit(true);
    }
  }

  @HostListener('focus', ['true'])
  @HostListener('blur', ['false'])
  protected blur(focused: boolean) {
    this.store.updateFocused(focused);
    this.store.updateTouched(true);
    this.focusedChange.emit(focused);
    this.touchedChange.emit(true);
    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.markAsDirty();
      this.ngControl.control.markAsTouched();
    }
  }

  @HostListener('input', ['$event.target.value'])
  protected input(value: string | number | undefined) {
    if (!this.controlValueChanges$) {
      this.store.updateValue(value);
      this.valueChange.emit(value);
    }
  }

}
