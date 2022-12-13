import { CommonLabelLozengesState } from "./lozenges.state";
import {
  CommonLabelLozengesSizeEnum,
  CommonLabelLozengesStatusEnum,
  CommonLabelLozengesStyleEnum
} from '@data-access-common';

export const CommonLabelLozengesInitialState: CommonLabelLozengesState = {
  status: CommonLabelLozengesStatusEnum.Neutral,
  style: CommonLabelLozengesStyleEnum.Transparent,
  size: CommonLabelLozengesSizeEnum.M,
  label: '',
  icon: undefined,
  iconPackage: undefined,
  extraClass: '',
  wrapperClass: 'wrapper-common-label__lozenges',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.LABEL.LOZENGES'
};
