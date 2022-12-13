import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormCalendarState } from './calendar.state';
import { formCalendarInitialState } from './calendar.constants';

@Injectable()
export class FormCalendarComponentStore extends ComponentStore<FormCalendarState> {
  constructor() {
    super(formCalendarInitialState);
  }

}
