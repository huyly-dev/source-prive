import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { CommonMaskState } from './mask.state';
import { commonMaskInitialState } from './mask.constants';

@Injectable()
export class CommonMaskComponentStore extends ComponentStore<CommonMaskState> {

  constructor() {
    super(commonMaskInitialState);
  }

}
