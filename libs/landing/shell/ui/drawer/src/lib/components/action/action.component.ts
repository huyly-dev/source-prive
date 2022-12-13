import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from '@angular/core';
import { CommonButtonSizeEnum, CommonButtonStatusEnum } from '@data-access-common';
import { LandingDrawerComponentStore } from '@landing-shared-data-access-store';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'prive-landing-drawer-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingShellUIDrawerActionComponent {

  public readonly CommonButtonSize = CommonButtonSizeEnum;
  public readonly CommonButtonStatus = CommonButtonStatusEnum;

  constructor(
      protected readonly store: LandingDrawerComponentStore,
      @Inject(DOCUMENT) protected readonly documentRef: Document
  ) { }

  public scrollToLandingForm(): void {
    this.store.closeDrawer();
    this.documentRef.getElementById('landingForm')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  public login(): void {
    window.open('/users/sessions/sign_in', '_self', 'noopener, noreferrer');
  }
}
