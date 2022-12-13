import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormComboBoxState } from './combo-box.state';
import { formComboBoxInitialState } from './combo-box.constants';

@Injectable()
export class FormComboBoxComponentStore extends ComponentStore<FormComboBoxState> {
  constructor() {
    super(formComboBoxInitialState);
  }

}
