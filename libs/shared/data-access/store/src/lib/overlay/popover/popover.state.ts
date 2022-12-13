import {
  OverlayCdkPositionModel,
  OverlayCdkTriggerModel,
  OverlayPopoverSizeModel,
  OverlayPopoverStatusModel
} from '@data-access-overlay';

export interface OverlayPopoverState {
  status: OverlayPopoverStatusModel;
  position: OverlayCdkPositionModel;
  trigger: OverlayCdkTriggerModel;
  size: OverlayPopoverSizeModel;
  top: string;
  right: string;
  bottom: string;
  left: string;
  wrapperClass: string;
  wrapperLocale: string;
}
