import { OverlayCdkPositionModel, OverlaySnackbarSizeModel, OverlaySnackbarStyleModel } from '../models';
import { Observable } from 'rxjs';

export interface ISnackbarConfig {
  style: OverlaySnackbarStyleModel;
  size: OverlaySnackbarSizeModel;
  position: OverlayCdkPositionModel;
  text: string;
  title: string;
  buttonLeftText?: string;
  buttonRightText?: string;
}

export interface ISnackbarCreateResponse<TClosed extends any, TOpened extends any> {
  afterClosed: Observable<TClosed | undefined>;
  afterOpened: Observable<TOpened | undefined>;
}
