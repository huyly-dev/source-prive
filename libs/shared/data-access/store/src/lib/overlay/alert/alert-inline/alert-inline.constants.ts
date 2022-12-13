import { OverlayAlertInlineState } from './alert-inline.state';
import { OverlayAlertSizeEnum, OverlayAlertStatusEnum } from '@data-access-overlay';

export const overlayAlertInlineInitialState: OverlayAlertInlineState = {
  text: '',
  size: OverlayAlertSizeEnum.S,
  status: OverlayAlertStatusEnum.Neutral,
  wrapperClass: 'wrapper-overlay-alert__inline',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.ALERT.INLINE'
};
