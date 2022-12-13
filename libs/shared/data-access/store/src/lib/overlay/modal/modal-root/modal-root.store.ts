import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { OverlayModalRootItem, OverlayModalRootState } from './modal-root.state';
import { Observable } from 'rxjs';
import { switchMap, take, tap } from 'rxjs/operators';
import { OverlayCdkAnimationEnum } from '@data-access-overlay';
import { overlayModalRootInitialState } from './modal-root.constants';

@Injectable({
  providedIn: 'root'
})
export class OverlayModalRootComponentStore extends ComponentStore<OverlayModalRootState> {

  public readonly existedModal$ = this.select((state) => !!state.item);

  constructor() {
    super(overlayModalRootInitialState);
  }

  public readonly updateItem = this.updater<OverlayModalRootItem | undefined>((state, item) => ({
    ...state,
    item,
    animationClass: item ? OverlayCdkAnimationEnum.ToTop : OverlayCdkAnimationEnum.ExitTop
  }));

  public readonly updateAnimationClass = this.updater<string>((state, animationClass) => ({
    ...state,
    animationClass
  }));

  public readonly close = this.effect(
    (trigger$: Observable<(item: OverlayModalRootItem) => void>) => trigger$
      .pipe(
        switchMap(
          (cb) => this.state$
            .pipe(
              take(1),
              tap(({ item }) => {
                if (item) {
                  cb(item);
                } else {
                  throw new Error('Can not close this modal Because this modal is not exist!');
                }
              })
            )
        )
      )
  );

}
