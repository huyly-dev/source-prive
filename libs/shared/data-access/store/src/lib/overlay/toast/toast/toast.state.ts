import { OverlayCdkPositionModel, OverlayToastStatusModel, OverlayToastStyleModel } from '@data-access-overlay';

export interface OverlayToastState {
  uuid: string;
  status: OverlayToastStatusModel;
  style: OverlayToastStyleModel;
  position: OverlayCdkPositionModel;
  text: string;
  animationClass: string;
  wrapperClass: string;
  wrapperLocale: string;
}
