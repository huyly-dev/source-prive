import { OverlayAlertState } from "./alert.state";
import { OverlayAlertActionTypeEnum, OverlayAlertStatusEnum, OverlayAlertStyleEnum } from '@data-access-overlay';
import { CommonButtonStatusEnum, CommonLinkStatusEnum } from '@data-access-common';

export const overlayAlertInitialState: OverlayAlertState = {
  status: OverlayAlertStatusEnum.Neutral,
  style: OverlayAlertStyleEnum.Text,
  text: '',
  buttonText: '',
  title: '',
  buttonStatus: CommonButtonStatusEnum.Tertiary,
  linkStatus: CommonLinkStatusEnum.Standalone,
  actionType: OverlayAlertActionTypeEnum.Button,
  collapsed: false,
  showStatusIcon: true,
  wrapperClass: 'wrapper-overlay-alert__primary',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.ALERT.PRIMARY'
};
