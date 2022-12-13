import {
  OverlayCdkPositionModel,
  OverlaySnackbarSizeModel,
  OverlaySnackbarStatusModel,
  OverlaySnackbarStyleModel
} from '@data-access-overlay';

export interface OverlaySnackbarState {
  uuid: string;
  style: OverlaySnackbarStyleModel;
  size: OverlaySnackbarSizeModel;
  status: OverlaySnackbarStatusModel;
  position: OverlayCdkPositionModel;
  title: string;
  text: string;
  animationClass: string;
  buttonLeftText: string;
  buttonRightText: string;
  wrapperClass: string;
  wrapperLocale: string;
}

