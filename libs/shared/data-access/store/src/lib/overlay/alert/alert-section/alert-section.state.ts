import { OverlayAlertStatusModel } from '@data-access-overlay';

export interface OverlayAlertSectionState {
  status: OverlayAlertStatusModel;
  text: string;
  title: string;
  textOnly: boolean;
  wrapperClass: string;
  wrapperLocale: string;
}
