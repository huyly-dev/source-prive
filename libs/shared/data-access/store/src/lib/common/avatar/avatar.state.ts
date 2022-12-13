import { CommonAvatarSizeModel, CommonAvatarStyleModel, CommonColorModel } from '@data-access-common';

export interface CommonAvatarState {
  size: CommonAvatarSizeModel;
  style: CommonAvatarStyleModel;
  backgroundColor: CommonColorModel;
  textColor: CommonColorModel;
  shortName: string;
  wrapperClass: string;
  wrapperLocale: string;
}
