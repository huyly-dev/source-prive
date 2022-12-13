import { OverlayModalState } from "./modal.state";
import { OverlayModalSizeEnum } from '@data-access-overlay';

export const overlayModalInitialState: OverlayModalState = {
  status: undefined,
  size: OverlayModalSizeEnum.M,
  title: undefined,
  wrapperClass: 'wrapper-overlay-modal',
  wrapperLocale: 'LIBS.SHARED.UI.OVERLAY.MODAL'
}
