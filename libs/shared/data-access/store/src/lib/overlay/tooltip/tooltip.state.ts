import { OverlayCdkPositionModel, OverlayCdkTriggerModel, OverlayTooltipStatusModel } from '@data-access-overlay';

export interface OverlayTooltipState {
  status: OverlayTooltipStatusModel;
  position: OverlayCdkPositionModel;
  trigger: OverlayCdkTriggerModel;
  text: string;
  top: string;
  right: string;
  bottom: string;
  left: string;
  wrapperClass: string;
  wrapperLocale: string;
}
