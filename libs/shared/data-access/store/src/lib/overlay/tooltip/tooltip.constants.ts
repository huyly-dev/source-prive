import { OverlayCdkPositionEnum, OverlayCdkTriggerEnum, OverlayTooltipStatusEnum } from '@data-access-overlay';
import { OverlayTooltipState } from './tooltip.state';

export const overlayTooltipInitialState: OverlayTooltipState = {
  status: OverlayTooltipStatusEnum.Default,
  position: OverlayCdkPositionEnum.Top,
  trigger: OverlayCdkTriggerEnum.Hover,
  text: '',
  top: '',
  right: '',
  bottom: '',
  left: '',
  wrapperClass: 'wrapper-overlay-tooltip',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.TOOLTIP'
};
