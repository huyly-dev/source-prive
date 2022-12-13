import { OverlayCdkPositionEnum } from '@data-access-overlay';
import { OverlayToastRootState } from './toast-root.state';

export const overlayToastRootInitialState: OverlayToastRootState = {
  [OverlayCdkPositionEnum.Top]: [],
  [OverlayCdkPositionEnum.TopLeft]: [],
  [OverlayCdkPositionEnum.TopRight]: [],
  [OverlayCdkPositionEnum.Bottom]: [],
  [OverlayCdkPositionEnum.BottomLeft]: [],
  [OverlayCdkPositionEnum.BottomRight]: [],
  [OverlayCdkPositionEnum.Left]: [],
  [OverlayCdkPositionEnum.Right]: [],
};
