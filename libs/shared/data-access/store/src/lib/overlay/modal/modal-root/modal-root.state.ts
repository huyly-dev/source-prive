import { ComponentRef, Type } from '@angular/core';

export interface OverlayModalRootState {
  item: OverlayModalRootItem | undefined;
  animationClass: string;
}

export interface OverlayModalRootItem {
  id: string;
  componentRef: ComponentRef<Type<any>>;
}
