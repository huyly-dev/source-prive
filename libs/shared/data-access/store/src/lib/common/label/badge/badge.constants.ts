import { CommonLabelBadgeState } from "./badge.state";
import { CommonLabelBadgeStatusEnum } from '@data-access-common';

export const commonLabelBadgeInitialState: CommonLabelBadgeState = {
  status: CommonLabelBadgeStatusEnum.Default,
  isDot: false,
  label: '',
  wrapperClass: 'wrapper-common-label__badge',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.LABEL.BADGE'
};
