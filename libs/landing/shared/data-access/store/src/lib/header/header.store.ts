import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LandingHeaderState } from './header.state';
import { landingHeaderInitialState } from './header.constants';
import { LandingLayoutComponentStore } from '../layout';
import { OverlayCdkRootComponentStore } from '@data-access-store';
import { combineLatest, delay, EMPTY, Observable, of, switchMap, take, tap } from 'rxjs';

@Injectable()
export class LandingHeaderComponentStore extends ComponentStore<LandingHeaderState> {

  constructor(
    protected readonly layoutStore: LandingLayoutComponentStore,
    protected readonly cdkStore: OverlayCdkRootComponentStore
  ) {
    super(landingHeaderInitialState);
    this.scroll();
    this.animation();
  }

  public readonly scroll = this.effect(
    (trigger$: Observable<undefined>) => trigger$.pipe(
      switchMap(() =>
        this.cdkStore.scroll$.pipe(
          switchMap((event) =>
            this.select((store) => store.leaveTop).pipe(
              take(1),
              tap((leaveTop) => {
                if (!event) {
                  return;
                }

                const { scrollTop } = event.target as HTMLElement;

                this.transparent(scrollTop, leaveTop);
              })
            )
          )
        )
      )
    )
  );

  public readonly animation = this.effect(
    (trigger$: Observable<undefined>) => trigger$.pipe(
      switchMap(() =>
        this.cdkStore.scroll$.pipe(
          tap(() => {
            this.updateCloseTop(false);
          }),
          switchMap((event) => {
            if (!event) {
              return EMPTY;
            }

            const { scrollTop, clientHeight } = event.target as HTMLElement;
            if (scrollTop <= clientHeight) {
              return EMPTY;
            }

            return of(undefined).pipe(
              delay(2500),
              tap(() => {
                this.updateCloseTop(true);
              })
            );
          })
        )
      )
    )
  );

  public readonly updateLeaveTop = this.updater<boolean>((state, leaveTop) => ({
    ...state,
    leaveTop
  }));

  public readonly updateCloseTop = this.updater<boolean>((state, closeTop) => ({
    ...state,
    closeTop
  }));

  public transparent(scrollTop: number, leaveTop: boolean): void {
    if (scrollTop === 0) {
      if (leaveTop) {
        this.updateLeaveTop(false);
      }
    } else {
      if (!leaveTop) {
        this.updateLeaveTop(true);
      }
    }
  }

  public showDrawer(): void {
    this.layoutStore.updateShowDrawer(true);
  }

}
