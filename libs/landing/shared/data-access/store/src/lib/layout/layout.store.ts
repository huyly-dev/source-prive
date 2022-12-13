import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LandingLayoutState } from './layout.state';
import { landingLayoutInitialState } from './layout.constants';
import { delay, EMPTY, Observable, of, switchMap, tap } from 'rxjs';

@Injectable()
export class LandingLayoutComponentStore extends ComponentStore<LandingLayoutState> {

  public readonly showDrawer$ = this.select((state) => state.showDrawer);
  public readonly showBottomButton$ = this.select((state) => state.showBottomButton);

  constructor() {
    super(landingLayoutInitialState);
  }

  public readonly onScroll = this.effect(
    (trigger$: Observable<number>) => trigger$.pipe(
      switchMap((value) => {
        if (value > 100) {
          return of([]).pipe(
            tap(() => this.updateShowBottomButton(true)),
            delay(2500),
            tap(() => this.updateShowBottomButton(false))
          );
        }

        return of([]).pipe(
          tap(() => this.updateShowBottomButton(false))
        );
      })
    )
  );

  public readonly updateShowDrawer = this.updater<boolean>((state, showDrawer) => ({
    ...state,
    showDrawer
  }));

  public readonly updateShowBottomButton = this.updater<boolean>((state, showBottomButton) => ({
    ...state,
    showBottomButton
  }));

}
