import { OverlayPopoverState } from "./popover.state";
import {
  OverlayCdkPositionEnum,
  OverlayCdkTriggerEnum,
  OverlayPopoverSizeEnum,
  OverlayPopoverStatusEnum
} from '@data-access-overlay';


export const overlayPopoverInitialState: OverlayPopoverState = {
  status: OverlayPopoverStatusEnum.Information,
  position: OverlayCdkPositionEnum.Top,
  trigger: OverlayCdkTriggerEnum.Hover,
  size: OverlayPopoverSizeEnum.Default,
  top: '',
  right: '',
  bottom: '',
  left: '',
  wrapperClass: 'wrapper-overlay-popover',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.POPOVER'
}
