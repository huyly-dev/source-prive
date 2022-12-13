import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonIconPackageModel, CommonIconTypeModel } from '@data-access-common';
import { CommonTabState } from './tab.state';
import { CommonTabsetComponentStore } from '../tabset';
import { combineLatest, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { commonTabInitialState } from './tab.constants';

@Injectable()
export class CommonTabComponentStore extends ComponentStore<CommonTabState> {

  constructor(
    protected readonly tabSetStore: CommonTabsetComponentStore
  ) {
    super(commonTabInitialState);
    this.listen();
  }

  public readonly listen = this.effect(
    (trigger$: Observable<undefined>) => trigger$.pipe(
      switchMap(
        () => combineLatest([
          this.tabSetStore.select((state) => state.selectedKey),
          this.select((state) => state.key)
        ])
          .pipe(
            tap(([selectedKey, key]) => this.updateActive(selectedKey === key))
          )
      )
    )
  );

  public readonly updateKey = this.updater<string>((state, key) => ({
    ...state,
    key
  }));

  public readonly updateTitle = this.updater<string>((state, title) => ({
    ...state,
    title
  }));

  public readonly updateIcon = this.updater<CommonIconTypeModel | undefined>((state, icon) => ({
    ...state,
    icon
  }));

  public readonly updateIconPackage = this.updater<CommonIconPackageModel | undefined>((state, iconPackage) => ({
    ...state,
    iconPackage
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

  public readonly updateActive = this.updater<boolean>((state, active) => ({
    ...state,
    active
  }));

}
