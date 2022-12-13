import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  HostListener,
  Input,
  OnInit, Optional,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {
  PriveFormInputDirective,
  PriveFormInputPrefixDirective,
  PriveFormInputSuffixDirective
} from '../../directives';
import {
  CommonIconAlertEnum,
  CommonIconCheckEnum,
  CommonIconGlobalEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum
} from '@data-access-common';
import {
  FormInputDirectionModel,
  FormInputSizeModel, FormInputStatusEnum,
  FormInputStatusModel
} from '@data-access-form';
import {
  FormInputComponentStore
} from '@data-access-store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'prive-form-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    FormInputComponentStore
  ]
})
export class PriveFormInputComponent implements OnInit {

  @Input()
  @Optional()
  public set canShowError(canShowError: boolean | undefined) {
    if (typeof canShowError === 'boolean') {
      this.store.updateCanShowError(canShowError);
    }
  }

  @Input()
  @Optional()
  public set errorMessage(errorMessage: string | undefined) {
    if (errorMessage) {
      this.store.updateErrorMessage(errorMessage);
    }
  }

  @Input()
  @Optional()
  public set canShowErrorMessage(canShowErrorMessage: boolean | undefined) {
    if (typeof canShowErrorMessage === 'boolean') {
      this.store.updateCanShowErrorMessage(canShowErrorMessage);
    }
  }

  @Input()
  @Optional()
  public set canShowSuccess(canShowSuccess: boolean | undefined) {
    if (typeof canShowSuccess === 'boolean') {
      this.store.updateCanShowSuccess(canShowSuccess);
    }
  }

  @Input()
  @Optional()
  public set successMessage(successMessage: string | undefined) {
    if (successMessage) {
      this.store.updateSuccessMessage(successMessage);
    }
  }

  @Input()
  @Optional()
  public set canShowSuccessMessage(canShowSuccessMessage: boolean | undefined) {
    if (typeof canShowSuccessMessage === 'boolean') {
      this.store.updateCanShowSuccessMessage(canShowSuccessMessage);
    }
  }

  @Input()
  @Optional()
  public set canShowWarning(canShowWarning: boolean | undefined) {
    if (typeof canShowWarning === 'boolean') {
      this.store.updateCanShowWarning(canShowWarning);
    }
  }

  @Input()
  @Optional()
  public set warningMessage(warningMessage: string | undefined) {
    if (warningMessage) {
      this.store.updateWarningMessage(warningMessage);
    }
  }

  @Input()
  @Optional()
  public set canShowWarningMessage(canShowWarningMessage: boolean | undefined) {
    if (typeof canShowWarningMessage === 'boolean') {
      this.store.updateCanShowWarningMessage(canShowWarningMessage);
    }
  }

  @Input()
  @Optional()
  public set label(label: string | undefined) {
    if (label) {
      this.store.updateLabel(label);
    }
  }

  @Input()
  @Optional()
  public set direction(direction: FormInputDirectionModel | undefined) {
    if (direction) {
      this.store.updateDirection(direction);
    }
  };

  @Input()
  @Optional()
  public set required(required: boolean | undefined) {
    if (typeof required === 'boolean') {
      this.store.updateRequired(required);
    }
  }

  @Input()
  @Optional()
  public set size(size: FormInputSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  }

  @Input()
  @Optional()
  public set status(status: FormInputStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  }

  @ContentChild(PriveFormInputDirective, { static: true })
  public readonly inputDirective!: PriveFormInputDirective;
  @ContentChildren(PriveFormInputSuffixDirective, { descendants: true })
  public readonly suffixChildren!: QueryList<PriveFormInputSuffixDirective>;
  @ContentChildren(PriveFormInputPrefixDirective, { descendants: true })
  public readonly prefixChildren!: QueryList<PriveFormInputPrefixDirective>;

  public set className(className: string) {
    this.store.updateClassName(className);
  }

  public set canResize(canResize: boolean) {
    this.store.updateCanResize(canResize);
  }

  public get inputExisted(): boolean {
    return !!this.inputDirective;
  }

  public readonly IconSize = CommonIconSizeEnum;
  public readonly IconAlert = CommonIconAlertEnum;
  public readonly IconCheck = CommonIconCheckEnum;
  public readonly IconPackage = CommonIconPackageEnum;
  public readonly IconGlobal = CommonIconGlobalEnum;
  public readonly FormInputStatus = FormInputStatusEnum;

  public readonly state$ = this.store.state$
    .pipe(
      map((state) => this.store.getUpdatedState(state))
    );

  constructor(
    protected readonly store: FormInputComponentStore
  ) {
  }

  public ngOnInit(): void {
    if (!this.inputExisted) {
      this.store.throwNotExistedError();
      return;
    }
  }

  public resize(event: MouseEvent): void {
    this.store.resize((value) => {
      if (value) {
        const newHeight = this.inputDirective.element.offsetHeight + event.movementY;
        this.inputDirective.setHeight((newHeight > 86 ? newHeight : this.inputDirective.element.offsetHeight) + 'px');
      }
    });
  }

  @HostListener('window:mousemove', ['$event'])
  public mousemove(event: MouseEvent): void {
    this.resize(event);
  }

  @HostListener('window:mouseup', ['$event'])
  public mouseup(): void {
    this.store.updateCanResize(false);
  }
}
