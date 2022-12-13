import { OverlayMenuState } from "./menu.state";
import { OverlayCdkPositionEnum, OverlayCdkTriggerEnum } from '@data-access-overlay';

export const overlayMenuInitialState: OverlayMenuState = {
  position: OverlayCdkPositionEnum.Top,
  trigger: OverlayCdkTriggerEnum.Hover,
  top: '',
  right: '',
  bottom: '',
  left: '',
  wrapperClass: 'wrapper-overlay-menu',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.MENU'
};
