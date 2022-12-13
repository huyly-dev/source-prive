import { Observable } from 'rxjs';

export interface IModalConfig<TData> {
  data?: TData;
  backdropClick?: boolean;
}

export interface IModalCreateResponse<TAfterClosed, TAfterOpened> {
  afterClosed: Observable<TAfterClosed | undefined>;
  afterOpened: Observable<TAfterOpened | undefined>;
  id: string;
}
