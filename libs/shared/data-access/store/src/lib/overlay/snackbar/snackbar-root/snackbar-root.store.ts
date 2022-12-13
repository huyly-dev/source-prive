import { ComponentRef, Injectable, Type } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlaySnackbarRootItem, OverlaySnackbarRootState } from './snackbar-root.state';
import { OverlayCdkPositionModel } from '@data-access-overlay';
import { concat, Observable, of } from 'rxjs';
import { delay, map, mergeMap, switchMap, take, tap } from 'rxjs/operators';
import { overlaySnackbarRootInitialState } from './snackbar-root.constants';

@Injectable({
  providedIn: 'root'
})
export class OverlaySnackbarRootComponentStore extends ComponentStore<OverlaySnackbarRootState> {

  constructor() {
    super(overlaySnackbarRootInitialState);
  }

  public readonly push = this.updater<{ position: OverlayCdkPositionModel, item: OverlaySnackbarRootItem }>((state, {
    position,
    item
  }) => {
    state[position].push(item);
    return state;
  });

  public readonly remove = this.updater<{ position: OverlayCdkPositionModel, close: (componentRef: ComponentRef<Type<any>>) => void }>((state, {
    position,
    close
  }) => {
    state[position].filter((e) => !!e.componentRef).forEach((e) => {
      close(e.componentRef);
    });
    state[position] = [];

    return state;
  });

  public readonly create = this.effect(
    (trigger$: Observable<{
      id: string, debounce: number,
      position: OverlayCdkPositionModel,
      create: () => void,
      open: () => ComponentRef<any>,
      afterOpened: () => void,
      close: () => void,
    }>) => trigger$
      .pipe(
        mergeMap(
          ({ position, debounce, open, id, afterOpened, close, create }) =>
            of([]).pipe(
              tap(() => create()),
              delay(100),
              switchMap(() => {
                const componentRef = open();
                return of([])
                  .pipe(
                    tap(() => {
                      this.push({
                        position,
                        item: {
                          id,
                          componentRef
                        }
                      });
                    }),
                    delay(100),
                    tap(() => afterOpened()),
                    delay(debounce),
                    tap(() => close())
                  );
              })
            )
        )
      )
  );

  public readonly close = this.effect(
    (trigger$: Observable<{
      position: OverlayCdkPositionModel,
      end: (componentRef: ComponentRef<any>) => void,
      close: (componentRef: ComponentRef<any>) => void,
      afterClosed: () => void
    }>) => trigger$
      .pipe(
        switchMap(
          ({ end, afterClosed, position, close }) => this.state$
            .pipe(
              take(1),
              map((state) => state[position]),
              switchMap((items) => {
                return concat(
                  ...items.map((item) => {
                    return of([]).pipe(
                      tap(() => end(item.componentRef)),
                      delay(20),
                    );
                  }),
                  of([]).pipe(
                    delay(200 + (items.length * 20)),
                    tap(() => {
                      this.remove({ position, close });
                      afterClosed();
                    })
                  )
                );

              })
            )
        )
      )
  );

}
