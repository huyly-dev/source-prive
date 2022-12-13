import { OverlayCdkPositionModel, OverlayCdkTriggerModel } from '@data-access-overlay';

export interface OverlayMenuState {
  position: OverlayCdkPositionModel;
  trigger: OverlayCdkTriggerModel;
  top: string;
  right: string;
  bottom: string;
  left: string;
  wrapperClass: string;
  wrapperLocale: string;
}
