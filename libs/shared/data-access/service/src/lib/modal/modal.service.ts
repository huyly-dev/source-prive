import { Inject, Injectable, PLATFORM_ID, Type } from '@angular/core';
import { IModalConfig, IModalCreateResponse } from '@data-access-overlay';
import { OverlayModalRootComponentStore } from '@data-access-store';
import { CdkService } from '../cdk/cdk.service';
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { uuid } from '@utils-generator';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public readonly afterClosed$ = new Subject();
  public readonly afterOpened$ = new Subject();

  constructor(
    protected readonly store: OverlayModalRootComponentStore,
    protected readonly cdk: CdkService,
    @Inject(PLATFORM_ID) protected readonly platformId: string
  ) {
  }

  public open<TData, TAfterClosed, TAfterOpened>(
    component: Type<any>,
    config?: IModalConfig<TData>
  ): IModalCreateResponse<TAfterClosed, TAfterOpened> {
    if (!isPlatformBrowser(this.platformId)) {
      return {
        afterClosed: this.afterClosed$ as Observable<TAfterClosed | undefined>,
        afterOpened: this.afterOpened$ as Observable<TAfterOpened | undefined>,
        id: ''
      };
    }
    this.cdk.showOverlay();
    const id = uuid();
    const componentRef = this.cdk.createModalComponentRef(component, config?.data);
    const el = this.cdk.getDomElementFromComponentRef(componentRef);
    this.store.updateItem({
      id,
      componentRef
    });
    this.cdk.appendChildToOverlay(el);
    const timeoutOpen = setTimeout(() => {
      this.afterOpened$.next(undefined);
      clearTimeout(timeoutOpen);
    }, 100);

    if (config?.backdropClick) {
      const destroy$ = new Subject();
      fromEvent(this.cdk.getOverlayContainer(), 'click')
        .pipe(
          tap((e) => {
            const { target } = e;
            if (!el.contains(target as HTMLElement)) {
              this.close();
              destroy$.next(true);
              destroy$.complete();
            }
          }),
          takeUntil(destroy$)
        )
        .subscribe();
    }
    return {
      afterClosed: this.afterClosed$ as Observable<TAfterClosed | undefined>,
      afterOpened: this.afterOpened$ as Observable<TAfterOpened | undefined>,
      id
    };
  }

  public close<TAfterClosed>(data?: TAfterClosed): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.store.close(
      (item) => {
        const { componentRef } = item;
        this.store.updateItem(undefined);

        if (!componentRef || (componentRef && !componentRef.hostView) || (componentRef && componentRef.hostView && componentRef.hostView.destroyed)) {
          return;
        }

        const timeout = setTimeout(() => {
          this.cdk.destroyRef(componentRef);
          this.cdk.hiddenOverlay();
          this.afterClosed$.next(data);
          clearTimeout(timeout);
        }, 300);
      }
    );
  }
}
