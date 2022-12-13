import { OverlayModalSizeModel, OverlayModalStatusModel } from '@data-access-overlay';

export interface OverlayModalState {
  status: OverlayModalStatusModel | undefined;
  size: OverlayModalSizeModel;
  title: string | undefined;
  wrapperClass: string;
  wrapperLocale: string;
}
