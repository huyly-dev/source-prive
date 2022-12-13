import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormSliderState } from './slider.state';
import { formSliderInitialState } from './slider.constants';

@Injectable()
export class FormSliderComponentStore extends ComponentStore<FormSliderState> {

  constructor() {
    super(formSliderInitialState);
  }

}
