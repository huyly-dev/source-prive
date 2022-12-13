import { OverlayCdkNotificationState } from "./cdk-notification.state";
import { OverlayCdkPositionEnum } from '@data-access-overlay';

export const overlayCdkNotificationInitialState: OverlayCdkNotificationState = {
  position: OverlayCdkPositionEnum.Top,
  wrapperClass: 'wrapper-overlay-cdk__notification',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.CDK.NOTIFICATION'
}
