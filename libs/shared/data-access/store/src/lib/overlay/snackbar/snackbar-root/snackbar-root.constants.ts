import { OverlayCdkPositionEnum } from '@data-access-overlay';
import { OverlaySnackbarRootState } from './snackbar-root.state';

export const overlaySnackbarRootInitialState: OverlaySnackbarRootState = {
  [OverlayCdkPositionEnum.Top]: [],
  [OverlayCdkPositionEnum.TopLeft]: [],
  [OverlayCdkPositionEnum.TopRight]: [],
  [OverlayCdkPositionEnum.Bottom]: [],
  [OverlayCdkPositionEnum.BottomLeft]: [],
  [OverlayCdkPositionEnum.BottomRight]: [],
  [OverlayCdkPositionEnum.Left]: [],
  [OverlayCdkPositionEnum.Right]: [],
};
