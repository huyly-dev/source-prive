import { CommonLabelBadgeStatusModel } from '@data-access-common';

export interface CommonLabelBadgeState {
  status: CommonLabelBadgeStatusModel;
  isDot: boolean;
  label: string;
  wrapperClass: string;
  wrapperLocale: string;
}
