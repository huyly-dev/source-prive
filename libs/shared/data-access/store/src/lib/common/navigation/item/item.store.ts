import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  CommonNavigationItemSizeModel,
  CommonNavigationItemStatusModel,
  CommonNavigationItemStyleModel,
  INavigationItem
} from '@data-access-common';
import { CommonNavigationItemState } from './item.state';
import { commonNavigationItemInitialState } from './item.constants';

@Injectable()
export class CommonNavigationItemComponentStore extends ComponentStore<CommonNavigationItemState> {

  constructor() {
    super(commonNavigationItemInitialState);
  }


  public readonly updateStatus = this.updater<CommonNavigationItemStatusModel>((state, status) => ({
    ...state,
    status
  }));

  public readonly updateTypeCheck = this.updater<'route' | 'selected'>((state, typeCheck) => ({
    ...state,
    typeCheck
  }));

  public readonly updateStyle = this.updater<CommonNavigationItemStyleModel>((state, style) => ({
    ...state,
    style
  }));

  public readonly updateSize = this.updater<CommonNavigationItemSizeModel>((state, size) => ({
    ...state,
    size
  }));

  public readonly updateItem = this.updater<INavigationItem | undefined>((state, item) => ({
    ...state,
    item,
    quantity: state.isAvatar ? 1 : ((item as INavigationItem).icon && (item as INavigationItem).package ? 1 : 0)
  }));

  public readonly updateIsAvatar = this.updater<boolean>((state, isAvatar) => ({
    ...state,
    isAvatar,
    quantity: isAvatar ? 1 : ((state.item as INavigationItem).icon && (state.item as INavigationItem).package ? 1 : 0)
  }));

  public readonly updateSelected = this.updater<string | undefined>((state, selected) => ({
    ...state,
    selected
  }));

  public readonly updateExpanded = this.updater<boolean>((state, expanded) => ({
    ...state,
    expanded
  }));

  public readonly updateHaveChild = this.updater<boolean>((state, haveChild) => ({
    ...state,
    haveChild
  }));

  public readonly updateQuantity = this.updater<number>((state, quantity) => ({
    ...state,
    quantity
  }));
}
