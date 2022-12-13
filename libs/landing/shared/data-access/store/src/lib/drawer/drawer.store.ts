import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { LandingDrawerState } from './drawer.state';
import { landingDrawerInitialState } from './drawer.constants';
import { LandingLayoutComponentStore } from '../layout';

@Injectable()
export class LandingDrawerComponentStore extends ComponentStore<LandingDrawerState> {

  public readonly showDrawer$ = this.layoutStore.showDrawer$;

  constructor(
    protected readonly layoutStore: LandingLayoutComponentStore
  ) {
    super(landingDrawerInitialState);
  }

  public closeDrawer(): void {
    this.layoutStore.updateShowDrawer(false);
  }

}
