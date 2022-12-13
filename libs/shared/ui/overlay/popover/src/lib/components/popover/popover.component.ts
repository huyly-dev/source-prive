import { ChangeDetectionStrategy, Component, Input, Optional, TemplateRef } from '@angular/core';
import {
  OverlayCdkPositionModel,
  OverlayCdkTriggerModel,
  OverlayPopoverSizeModel,
  OverlayPopoverStatusModel
} from '@data-access-overlay';
import { OverlayPopoverComponentStore } from '@data-access-store';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'prive-overlay-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  providers: [
    OverlayPopoverComponentStore,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveOverlayPopoverComponent {

  @Input()
  @Optional()
  public set status(status: OverlayPopoverStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  };

  @Input()
  @Optional()
  public set position(position: OverlayCdkPositionModel | undefined) {
    if (position) {
      this.store.updatePosition(position);
    }
  };

  @Input()
  @Optional()
  public set trigger(trigger: OverlayCdkTriggerModel | undefined) {
    if (trigger) {
      this.store.updateTrigger(trigger);
    }
  };

  @Input()
  @Optional()
  public set size(size: OverlayPopoverSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  };

  @Input()
  @Optional()
  public set top(top: string | undefined) {
    if (top) {
      this.store.updateTop(top);
    }
  };

  @Input()
  @Optional()
  public set right(right: string | undefined) {
    if (right) {
      this.store.updateRight(right);
    }
  };

  @Input()
  @Optional()
  public set bottom(bottom: string | undefined) {
    if (bottom) {
      this.store.updateBottom(bottom);
    }
  };

  @Input()
  @Optional()
  public set left(left: string | undefined) {
    if (left) {
      this.store.updateLeft(left);
    }
  };

  @Input()
  public template!: TemplateRef<HTMLElement>;

  public readonly state$ = combineLatest([
    this.store.state$,
    this.store.existedModal$
  ])
    .pipe(
      map(([state, existedModal]) => ({
        ...state,
        existedModal,
        style: {
          top: state.top,
          right: state.right,
          bottom: state.bottom,
          left: state.left
        }
      })),
    );

  constructor(
    protected readonly store: OverlayPopoverComponentStore
  ) { }

}
