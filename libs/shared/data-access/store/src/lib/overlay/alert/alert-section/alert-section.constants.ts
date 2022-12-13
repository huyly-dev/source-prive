import { OverlayAlertSectionState } from './alert-section.state';
import { OverlayAlertStatusEnum } from '@data-access-overlay';

export const overlayAlertSectionInitialState: OverlayAlertSectionState = {
  status: OverlayAlertStatusEnum.Neutral,
  text: '',
  title: '',
  textOnly: false,
  wrapperClass: 'wrapper-overlay-alert__section',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.ALERT.SECTION'
};
