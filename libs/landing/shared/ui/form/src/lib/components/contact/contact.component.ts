import { ChangeDetectionStrategy, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormCheckBoxStatusEnum, FormInputSizeEnum, FormInputStatusEnum } from '@data-access-form';
import { LandingFormContactComponentStore, LandingFormContactTypeEnum } from '@landing-shared-data-access-store';
import { RecaptchaComponent } from 'ng-recaptcha';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phoneRegex } from '@utils-pattern';
import { IOrganizationDataVM } from '@data-access-api';
import { OverlayCdkPositionEnum, OverlayCdkTriggerEnum, OverlayTooltipStatusEnum } from '@data-access-overlay';
import { autoDestroy, followDestroy } from '@utils-observable';
import { tap } from 'rxjs';

@Component({
  selector: 'prive-landing-form-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    LandingFormContactComponentStore
  ]
})
@autoDestroy()
export class PriveLandingSharedUIFormContactComponent {

  @ViewChild(RecaptchaComponent)
  public readonly captcha!: RecaptchaComponent;

  @Input()
  public titleLinear = false;

  public readonly form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    phone_number: new FormControl('', [Validators.required, Validators.pattern(phoneRegex)]),
    note: new FormControl(''),
    is_coinhako_user: new FormControl(FormCheckBoxStatusEnum.UnCheck)
  });

  public readonly state$ = this.store.state$;

  public readonly FormInputStatus = FormInputStatusEnum;
  public readonly FormInputSize = FormInputSizeEnum;
  public readonly LandingFormContactType = LandingFormContactTypeEnum;
  public readonly OverlayCdkTrigger = OverlayCdkTriggerEnum;
  public readonly OverlayTooltipStatus = OverlayTooltipStatusEnum;
  public readonly OverlayCdkPosition = OverlayCdkPositionEnum;

  constructor(
    protected readonly store: LandingFormContactComponentStore
  ) {
    this.form.valueChanges.pipe(
      followDestroy(this),
      tap(() => store.updateShowError(false))
    ).subscribe();
  }

  public resolveCaptcha(event: string): void {
    if (!event) {
      return;
    }
    const data = {
      ...this.form
        .value,
      is_coinhako_user: this.form.value.is_coinhako_user === FormCheckBoxStatusEnum.Checked,
      'g-recaptcha-response': event
    } as IOrganizationDataVM;
    this.store.contact(
      {
        data,
        cb: () => {
          this.captcha.reset();
          this.form.reset({
            name: '',
            email: '',
            phone_number: '',
            note: '',
            is_coinhako_user: FormCheckBoxStatusEnum.UnCheck
          });
        }
      }
    );
  }

  public submit(): void {
    if (this.form.invalid) {
      this.store.updateShowError(true);
      return;
    }
    this.captcha.execute();
  }
}
