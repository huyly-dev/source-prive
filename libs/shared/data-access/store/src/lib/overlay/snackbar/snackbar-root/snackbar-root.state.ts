import { ComponentRef, Type } from '@angular/core';
import { OverlayCdkPositionEnum } from '@data-access-overlay';

export interface OverlaySnackbarRootState {
  [OverlayCdkPositionEnum.Top]: OverlaySnackbarRootItem[];
  [OverlayCdkPositionEnum.TopLeft]: OverlaySnackbarRootItem[];
  [OverlayCdkPositionEnum.TopRight]: OverlaySnackbarRootItem[];
  [OverlayCdkPositionEnum.Bottom]: OverlaySnackbarRootItem[];
  [OverlayCdkPositionEnum.BottomLeft]: OverlaySnackbarRootItem[];
  [OverlayCdkPositionEnum.BottomRight]: OverlaySnackbarRootItem[];
  [OverlayCdkPositionEnum.Left]: OverlaySnackbarRootItem[];
  [OverlayCdkPositionEnum.Right]: OverlaySnackbarRootItem[];
}

export interface OverlaySnackbarRootItem {
  id: string;
  componentRef: ComponentRef<Type<any>>;
}
