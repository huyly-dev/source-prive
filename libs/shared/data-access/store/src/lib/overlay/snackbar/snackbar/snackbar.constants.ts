import { OverlaySnackbarState } from "./snackbar.state";
import {
  OverlayCdkPositionEnum,
  OverlaySnackbarSizeEnum,
  OverlaySnackbarStatusEnum,
  OverlaySnackbarStyleEnum
} from '@data-access-overlay';

export const overlaySnackbarInitialState: OverlaySnackbarState = {
  uuid: '',
  style: OverlaySnackbarStyleEnum.Light,
  size: OverlaySnackbarSizeEnum.Short,
  status: OverlaySnackbarStatusEnum.Neutral,
  position: OverlayCdkPositionEnum.TopLeft,
  title: '',
  text: '',
  animationClass: '',
  buttonRightText: 'LIBS.SHARED.UI.OVERLAY.SNACKBAR.COMPONENTS.BASE.LINKS.UNDERSTOOD',
  buttonLeftText: 'LIBS.SHARED.UI.OVERLAY.SNACKBAR.COMPONENTS.BASE.LINKS.NO_THANKS',
  wrapperClass: 'wrapper-overlay-snackbar',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.SNACKBAR'
}
