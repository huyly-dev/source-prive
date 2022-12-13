import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayCdkPositionModel } from '@data-access-overlay';
import { OverlayCdkNotificationState } from './cdk-notification.state';
import { overlayCdkNotificationInitialState } from './cdk-notification.constants';

@Injectable()
export class OverlayCdkNotificationComponentStore extends ComponentStore<OverlayCdkNotificationState> {
  constructor() {
    super(overlayCdkNotificationInitialState);
  }

  public readonly updatePosition = this.updater<OverlayCdkPositionModel>((state, position) => ({
    ...state,
    position
  }));

}
