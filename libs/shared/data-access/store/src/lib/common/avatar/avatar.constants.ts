import { CommonAvatarSizeEnum, CommonAvatarStyleEnum, CommonColorEnum } from '@data-access-common';
import { CommonAvatarState } from './avatar.state';

export const commonAvatarInitialState: CommonAvatarState = {
  backgroundColor: CommonColorEnum.NEUTRAL500,
  textColor: CommonColorEnum.NEUTRAL_WHITE,
  style: CommonAvatarStyleEnum.Circle,
  size: CommonAvatarSizeEnum.M,
  shortName: '',
  wrapperClass: 'wrapper-common-avatar',
  wrapperLocale: 'LIBS.SHARED.UI.COMMON.AVATAR'
};
