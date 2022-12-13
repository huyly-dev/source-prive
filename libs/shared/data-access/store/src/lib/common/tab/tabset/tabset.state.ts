import { CommonTabSizeModel, CommonTabStyleModel } from '@data-access-common';

export interface CommonTabsetState {
  style: CommonTabStyleModel;
  size: CommonTabSizeModel;
  selectedKey: string | undefined;
  wrapperClass: string;
  wrapperLocale: string;
}
