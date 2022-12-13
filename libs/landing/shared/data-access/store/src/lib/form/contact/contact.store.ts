import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LandingFormContactRequest, LandingFormContactState, LandingFormContactTypeEnum } from './contact.state';
import { DELAY_TIME, landingFormContactInitialState } from './contact.constants';
import { OrganizationsApi } from '@data-access-api';
import { delay, finalize, Observable, switchMap, tap } from 'rxjs';

@Injectable()
export class LandingFormContactComponentStore extends ComponentStore<LandingFormContactState> {

  constructor(
    protected readonly organizationApi: OrganizationsApi
  ) {
    super(landingFormContactInitialState);
  }

  public readonly contact = this.effect(
    (trigger$: Observable<LandingFormContactRequest>) => trigger$.pipe(
      switchMap((trigger) =>
        this.organizationApi.contact(trigger.data)
          .pipe(
            tap(() => this.updateType(LandingFormContactTypeEnum.DONE)),
            delay(DELAY_TIME),
            tap(() => this.updateType(LandingFormContactTypeEnum.DEFAULT)),
            finalize(() => trigger.cb())
          )
      )
    )
  );

  public readonly updateType = this.updater<LandingFormContactTypeEnum>((state, type) => ({
    ...state,
    type
  }));

  public readonly updateShowError = this.updater<boolean>((state, showError) => ({
    ...state,
    showError
  }));

}
