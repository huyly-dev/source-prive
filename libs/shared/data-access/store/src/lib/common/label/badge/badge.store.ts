import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonLabelBadgeStatusModel } from '@data-access-common';
import { CommonLabelBadgeState } from './badge.state';
import { commonLabelBadgeInitialState } from './badge.constants';

@Injectable()
export class CommonLabelBadgeComponentStore extends ComponentStore<CommonLabelBadgeState> {

  constructor() {
    super(commonLabelBadgeInitialState);
  }

  public readonly updateStatus = this.updater<CommonLabelBadgeStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateIsDot = this.updater<boolean>((state, isDot) => ({
    ...state,
    isDot
  }));

  public readonly updateLabel = this.updater<string>((state, label) => ({
    ...state,
    label
  }));

}
