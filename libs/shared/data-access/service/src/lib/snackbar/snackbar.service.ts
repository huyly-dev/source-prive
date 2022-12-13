import { ComponentRef, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { OverlaySnackbarRootComponentStore } from '@data-access-store';
import {
  ISnackbarConfig,
  ISnackbarCreateResponse,
  OverlayCdkPositionModel,
  OverlaySnackbarStatusEnum,
  OverlaySnackbarStatusModel
} from '@data-access-overlay';
import { CdkService } from '../cdk/cdk.service';
import { PriveOverlaySnackbarComponent } from '@ui-overlay-snackbar';
import { Observable, Subject } from 'rxjs';
import { animation, uuid } from '@utils-generator';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  public readonly afterClosed$ = new Subject();
  public readonly afterOpened$ = new Subject();

  constructor(
    protected readonly store: OverlaySnackbarRootComponentStore,
    protected readonly cdk: CdkService,
    @Inject(PLATFORM_ID) protected readonly platformId: string
  ) { }

  public neutral<TAfterClosed, TAfterOpened>(config: ISnackbarConfig, debounce: number = 5000): ISnackbarCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlaySnackbarStatusEnum.Neutral, debounce);
  }

  public success<TAfterClosed, TAfterOpened>(config: ISnackbarConfig, debounce: number = 5000): ISnackbarCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlaySnackbarStatusEnum.Success, debounce);
  }

  public error<TAfterClosed, TAfterOpened>(config: ISnackbarConfig, debounce: number = 5000): ISnackbarCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlaySnackbarStatusEnum.Error, debounce);
  }

  public note<TAfterClosed, TAfterOpened>(config: ISnackbarConfig, debounce: number = 5000): ISnackbarCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlaySnackbarStatusEnum.Note, debounce);
  }

  public warning<TAfterClosed, TAfterOpened>(config: ISnackbarConfig, debounce: number = 5000): ISnackbarCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlaySnackbarStatusEnum.Warning, debounce);
  }

  public information<TAfterClosed, TAfterOpened>(config: ISnackbarConfig, debounce: number = 5000): ISnackbarCreateResponse<TAfterClosed, TAfterOpened> {
    return this.create<TAfterClosed, TAfterOpened>(config, OverlaySnackbarStatusEnum.Information, debounce);
  }

  public create<TAfterClosed, TAfterOpened>(config: ISnackbarConfig, status: OverlaySnackbarStatusModel, debounce: number = 5000): ISnackbarCreateResponse<TAfterClosed, TAfterOpened> {
    if (!isPlatformBrowser(this.platformId)) {
      return {
        afterClosed: this.afterClosed$ as Observable<TAfterClosed>,
        afterOpened: this.afterOpened$ as Observable<TAfterOpened>
      };
    }
    const id = uuid();
    const { position, text, style, size, title, buttonRightText, buttonLeftText } = config;
    this.store.create({
      id,
      position,
      debounce,
      create: (): void => {
        this.cdk.createNotification(position);
      },
      open: (): ComponentRef<PriveOverlaySnackbarComponent> => {
        const componentRef = this.cdk.createComponentRef(PriveOverlaySnackbarComponent);
        componentRef.instance.uuid = id;
        componentRef.instance.text = text;
        componentRef.instance.position = position;
        componentRef.instance.style = style;
        componentRef.instance.size = size;
        componentRef.instance.title = title;
        componentRef.instance.status = status;
        componentRef.instance.animationClass = animation(position, 'add');
        if (buttonLeftText) {
          componentRef.instance.buttonLeftText = buttonLeftText;
        }
        if (buttonRightText) {
          componentRef.instance.buttonRightText = buttonRightText;
        }
        const notification = this.cdk.getNotification(position);
        const snackbar = this.cdk.getDomElementFromComponentRef(componentRef);
        this.cdk.showNotification(position);
        this.cdk.appendChild(snackbar, notification);

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
      end: (componentRef: ComponentRef<PriveOverlaySnackbarComponent>): void => {
        componentRef.instance.animationClass = animation(position, 'remove');
      },
      close: (componentRef: ComponentRef<PriveOverlaySnackbarComponent>): void => {
        this.cdk.destroyRef(componentRef);
      },
      afterClosed: (): void => {
        this.afterClosed$.next(undefined);
        this.cdk.hiddenNotification(position);
      }
    });
  }
}
