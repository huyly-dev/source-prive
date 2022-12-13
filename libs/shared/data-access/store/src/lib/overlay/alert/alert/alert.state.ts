import { OverlayAlertActionTypeModel, OverlayAlertStatusModel, OverlayAlertStyleModel } from '@data-access-overlay';
import { CommonButtonStatusModel, CommonLinkStatusModel } from '@data-access-common';

export interface OverlayAlertState {
  status: OverlayAlertStatusModel;
  style: OverlayAlertStyleModel;
  text: string;
  title: string;
  buttonText: string;
  buttonStatus: CommonButtonStatusModel;
  linkStatus: CommonLinkStatusModel;
  actionType: OverlayAlertActionTypeModel;
  collapsed: boolean;
  showStatusIcon: boolean;
  wrapperClass: string;
  wrapperLocale: string;
}
