import { OverlayCdkPositionEnum, OverlayToastStatusEnum, OverlayToastStyleEnum } from '@data-access-overlay';
import { OverlayToastState } from './toast.state';

export const overlayToastInitialState: OverlayToastState = {
  uuid: '',
  status: OverlayToastStatusEnum.Neutral,
  style: OverlayToastStyleEnum.Light,
  position: OverlayCdkPositionEnum.Top,
  text: '',
  animationClass: '',
  wrapperClass: 'wrapper-overlay-toast',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.TOAST'
};
