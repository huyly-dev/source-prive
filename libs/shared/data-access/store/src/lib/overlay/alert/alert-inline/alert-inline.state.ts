import { OverlayAlertSizeModel, OverlayAlertStatusModel } from '@data-access-overlay';

export interface OverlayAlertInlineState {
  status: OverlayAlertStatusModel;
  size: OverlayAlertSizeModel;
  text: string;
  wrapperClass: string;
  wrapperLocale: string;
}
