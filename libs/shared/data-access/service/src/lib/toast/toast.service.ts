import { ComponentRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  IToastConfig,
  IToastCreateResponse,
  OverlayCdkPositionModel,
  OverlayToastStatusEnum,
  OverlayToastStatusModel
} from '@data-access-overlay';
import { OverlayToastRootComponentStore } from '@data-access-store';
import { CdkService } from '../cdk/cdk.service';
import { animation, uuid } from '@utils-generator';
import { PriveOverlayToastComponent } from '@ui-overlay-toast';
import { Observable, Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class ToastService {

  public readonly afterClosed$ = new Subject();
  public readonly afterOpened$ = new Subject();

  constructor(
    protected readonly store: OverlayToastRootComponentStore,
    protected readonly cdk: CdkService,
    @Inject(PLATFORM_ID) protected readonly platformId: string
  ) { }

  public neutral<TAfterClosed, TAfterOpened>(config: IToastConfig, debounce: number = 5000): IToastCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlayToastStatusEnum.Neutral, debounce);
  }

  public success<TAfterClosed, TAfterOpened>(config: IToastConfig, debounce: number = 5000): IToastCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlayToastStatusEnum.Success, debounce);
  }

  public error<TAfterClosed, TAfterOpened>(config: IToastConfig, debounce: number = 5000): IToastCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlayToastStatusEnum.Error, debounce);
  }

  public information<TAfterClosed, TAfterOpened>(config: IToastConfig, debounce: number = 5000): IToastCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlayToastStatusEnum.Information, debounce);
  }

  public create<TAfterClosed, TAfterOpened>(config: IToastConfig, status: OverlayToastStatusModel, debounce: number = 5000): IToastCreateResponse<TAfterClosed, TAfterOpened> {
    if (!isPlatformBrowser(this.platformId)) {
      return {
        afterClosed: this.afterClosed$ as Observable<TAfterClosed>,
        afterOpened: this.afterOpened$ as Observable<TAfterOpened>
      };
    }

    const id = uuid();
    const { position, text, style } = config;
    this.store.create({
      id,
      position,
      debounce,
      create: (): void => {
        this.cdk.createNotification(position);
      },
      open: (): ComponentRef<PriveOverlayToastComponent> => {
        const componentRef = this.cdk.createComponentRef(PriveOverlayToastComponent);
        componentRef.instance.uuid = id;
        componentRef.instance.text = text;
        componentRef.instance.position = position;
        componentRef.instance.style = style;
        componentRef.instance.status = status;
        componentRef.instance.animationClass = animation(position, 'add');
        const toast = this.cdk.getDomElementFromComponentRef(componentRef);
        const notification = this.cdk.getNotification(position);
        this.cdk.showNotification(position);
        this.cdk.appendChild(toast, notification);

        return componentRef;
      },
      afterOpened: (): void => {
        this.afterOpened$.next(undefined);
      },
      close: (): void => {
        this.close(position);
      }
    });

    return {
      afterClosed: this.afterClosed$ as Observable<TAfterClosed>,
      afterOpened: this.afterOpened$ as Observable<TAfterOpened>
    };
  }

  public close(position: OverlayCdkPositionModel): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.store.close({
      position,
      end: (componentRef: ComponentRef<PriveOverlayToastComponent>): void => {
        componentRef.instance.animationClass = animation(position, 'remove');
      },
      close: (componentRef: ComponentRef<PriveOverlayToastComponent>): void => {
        this.cdk.destroyRef(componentRef);
      },
      afterClosed: (): void => {
        this.afterClosed$.next(undefined);
        this.cdk.hiddenNotification(position);
      }
    });
  }

}
