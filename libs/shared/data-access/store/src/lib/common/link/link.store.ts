import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { ComponentStore } from '@ngrx/component-store';
import {
  CommonIconPackageModel,
  CommonIconTypeModel,
  CommonLinkSizeModel,
  CommonLinkStatusModel,
  CommonLinkTargetEnum,
  CommonLinkTargetModel
} from '@data-access-common';
import { CommonLinkState } from './link.state';
import { commonLinkInitialState } from './link.constants';

@Injectable()
export class CommonLinkComponentStore extends ComponentStore<CommonLinkState> {

  constructor(
    protected readonly router: Router
  ) {
    super(commonLinkInitialState);
  }

  public readonly navigate = this.effect(
    (trigger$: Observable<undefined>) => trigger$.pipe(
      switchMap((cb) => this.state$.pipe(
        take(1),
        tap((state) => {
          const { target, link, disabled } = state;

          if (disabled) {
            return;
          }

          if (target === CommonLinkTargetEnum.Route) {
            this.router.navigate([link]);
          } else {
            window.open(link, target);
          }
        })
      ))
    )
  );

  public readonly updateStatus = this.updater<CommonLinkStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateSize = this.updater<CommonLinkSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateTarget = this.updater<CommonLinkTargetModel>((state, target) => ({
    ...state,
    target
  }));

  public readonly updateIcon = this.updater<CommonIconTypeModel | undefined>((state, icon) => ({
    ...state,
    icon
  }));

  public readonly updateIconPackage = this.updater<CommonIconPackageModel | undefined>((state, iconPackage) => ({
    ...state,
    iconPackage
  }));

  public readonly updateIsOval = this.updater<boolean>((state, isOval) => ({
    ...state,
    isOval
  }));

  public readonly updateContent = this.updater<string>((state, content) => ({
    ...state,
    content
  }));

  public readonly updateLink = this.updater<string>((state, link) => ({
    ...state,
    link
  }));

  public readonly updateExtraClass = this.updater<string>((state, extraClass) => ({
    ...state,
    extraClass
  }));

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => ({
    ...state,
    disabled
  }));

}
