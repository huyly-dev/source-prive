import { OverlayCdkPositionModel, OverlayToastStyleModel } from '../models';
import { Observable } from 'rxjs';

export interface IToastConfig {
  style: OverlayToastStyleModel;
  position: OverlayCdkPositionModel;
  text: string;
}

export interface IToastCreateResponse<TClosed extends any, TOpened extends any> {
  afterClosed: Observable<TClosed | undefined>;
  afterOpened: Observable<TOpened | undefined>;
}
