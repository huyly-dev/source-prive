import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormAmountState } from './amount.state';
import { formAmountInitialState } from './amount.constants';

@Injectable()
export class FormAmountComponentStore extends ComponentStore<FormAmountState> {
  constructor() {
    super(formAmountInitialState);
  }

}
