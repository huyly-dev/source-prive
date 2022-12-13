import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { ComponentStore } from '@ngrx/component-store';
import { PriveMainLayoutEnum } from '@main-shared-data-access-variable';
import { PriveMainLayoutState } from './layout.state';

@Injectable()
export class PriveMainLayoutComponentStore extends ComponentStore<PriveMainLayoutState> {
  constructor(
    protected readonly router: Router,
    protected readonly activatedRoute: ActivatedRoute
  ) {
    super({
      type: PriveMainLayoutEnum.LANDING
    });
    this.init();
  }

  public init = this.effect((trigger$: Observable<undefined>) =>
    trigger$.pipe(
      switchMap(() =>
        this.router.events.pipe(
          filter((event) => event instanceof NavigationEnd),
          map(() => this.activatedRoute),
          map(route => route.firstChild as ActivatedRoute),
          switchMap(route => route ? route.data : of({})),
          tap((data) => this.updateType(data['type']))
        )
      )
    )
  );

  public updateType = this.updater((state, type: PriveMainLayoutEnum) => ({ ...state, type }));

}
