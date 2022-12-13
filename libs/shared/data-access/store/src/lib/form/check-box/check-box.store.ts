import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormCheckBoxStatusModel } from '@data-access-form';
import { FormCheckBoxState } from './check-box.state';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { formCheckBoxInitialState } from './check-box.constants';

@Injectable()
export class FormCheckBoxComponentStore extends ComponentStore<FormCheckBoxState> {

  constructor() {
    super(formCheckBoxInitialState);
  }

  public readonly toggle = this.effect(
    (trigger$: Observable<(state: FormCheckBoxState) => void>) => trigger$
      .pipe(
        switchMap((cb) =>
          this.state$.pipe(
            take(1),
            tap((state) => {
              cb(state);
            })
          )
        )
      )
  );

  public readonly updateStatus = this.updater<FormCheckBoxStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateCanSwitchIndeterminate = this.updater<boolean>((state, canSwitchIndeterminate) => ({
    ...state,
    canSwitchIndeterminate
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

  public readonly updateLabel = this.updater<string>((state, label) => ({
    ...state,
    label
  }));

}
