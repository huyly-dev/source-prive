import { ComponentRef, Type } from '@angular/core';
import { OverlayCdkPositionEnum } from '@data-access-overlay';

export interface OverlayToastRootState {
  [OverlayCdkPositionEnum.Top]: OverlayToastRootItem[];
  [OverlayCdkPositionEnum.TopLeft]: OverlayToastRootItem[];
  [OverlayCdkPositionEnum.TopRight]: OverlayToastRootItem[];
  [OverlayCdkPositionEnum.Bottom]: OverlayToastRootItem[];
  [OverlayCdkPositionEnum.BottomLeft]: OverlayToastRootItem[];
  [OverlayCdkPositionEnum.BottomRight]: OverlayToastRootItem[];
  [OverlayCdkPositionEnum.Left]: OverlayToastRootItem[];
  [OverlayCdkPositionEnum.Right]: OverlayToastRootItem[];
}

export interface OverlayToastRootItem {
  id: string;
  componentRef: ComponentRef<Type<any>>;
}
