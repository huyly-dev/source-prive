import { OverlayAlertStyleModel, OverlayCdkPositionModel } from '../models';
import { Observable } from 'rxjs';

export interface IAlertConfig {
  style: OverlayAlertStyleModel;
  position: OverlayCdkPositionModel;
  text: string;
}

export interface IAlertCreateResponse {
  afterClosed: Observable<unknown>;
  afterOpened: Observable<unknown>;
}
