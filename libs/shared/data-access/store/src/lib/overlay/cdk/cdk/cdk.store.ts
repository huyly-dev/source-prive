import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayCdkState } from './cdk.state';
import { overlayCdkInitialState } from './cdk.constants';

@Injectable()
export class OverlayCdkComponentStore extends ComponentStore<OverlayCdkState> {
  constructor() {
    super(overlayCdkInitialState);
  }
}
