import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { FormDropdownDirectionModel, FormDropdownSizeModel, IDropdownOption } from '@data-access-form';
import { CommonIconPackageModel, CommonIconTypeModel } from '@data-access-common';
import { FormDropdownState } from './dropdown.state';
import { formDropdownInitialState } from './dropdown.constants';

@Injectable()
export class FormDropdownComponentStore<TData> extends ComponentStore<FormDropdownState<TData>> {

  constructor() {
    super(formDropdownInitialState<TData>());
  }

  public readonly updateOptions = this.updater<IDropdownOption<TData>[]>((state, options) => {
    state.options = options;
    return this.getUpdatedState(state);
  });

  public readonly updateSelected = this.updater<string | undefined>((state, selected) => {
    state.selected = selected;
    return this.getUpdatedState(state);
  });

  public readonly updateDirection = this.updater<FormDropdownDirectionModel>((state, direction) => {
    state.direction = direction;
    return this.getUpdatedState(state);
  });

  public readonly updateSize = this.updater<FormDropdownSizeModel>((state, size) => {
    state.size = size;
    return this.getUpdatedState(state);
  });

  public readonly updatePlaceholder = this.updater<string>((state, placeholder) => {
    state.placeholder = placeholder;
    return this.getUpdatedState(state);
  });

  public readonly updateLabel = this.updater<string>((state, label) => {
    state.label = label;
    return this.getUpdatedState(state);
  });

  public readonly updateLoading = this.updater<boolean>((state, loading) => {
    state.loading = loading;
    return this.getUpdatedState(state);
  });

  public readonly updateDisabled = this.updater<boolean>((state, disabled) => {
    state.disabled = disabled;
    return this.getUpdatedState(state);
  });

  public readonly updateIcon = this.updater<CommonIconTypeModel | undefined>((state, icon) => {
    state.icon = icon;
    return this.getUpdatedState(state);
  });

  public readonly updateIconPackage = this.updater<CommonIconPackageModel | undefined>((state, iconPackage) => {
    state.iconPackage = iconPackage;
    return this.getUpdatedState(state);
  });

  public readonly updateExpanded = this.updater<boolean>((state, expanded) => {
    state.expanded = expanded;
    return this.getUpdatedState(state);
  });

  public readonly updateText = this.updater<string>((state, text) => {
    state.text = text;
    return this.getUpdatedState(state);
  });

  public readonly updateValue = this.updater<IDropdownOption<TData> | undefined>((state, value) => {
    state.value = value;
    return this.getUpdatedState(state);
  });

  protected getUpdatedState(state: FormDropdownState<TData>): FormDropdownState<TData> {
    this.setText(state);
    this.setValue(state);
    return state;
  }

  protected setValue(state: FormDropdownState<TData>): void {
    if (state.selected) {
      state.value = state.options.find((e) => e.key === state.selected);
    } else {
      state.value = undefined;
    }
  }

  protected setText(state: FormDropdownState<TData>): void {
    if (state.selected) {
      const selected = state.options.find((e) => e.key === state.selected);
      state.text = selected ? selected.label : state.placeholder;
    } else {
      state.text = state.placeholder;
    }
  }

}
