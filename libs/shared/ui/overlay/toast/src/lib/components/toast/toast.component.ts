import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import {
  OverlayCdkPositionModel,
  OverlayToastStatusModel,
  OverlayToastStyleModel
} from '@data-access-overlay';
import {
  CommonIconSizeEnum,
} from '@data-access-common';
import {
  OverlayToastComponentStore,
} from '@data-access-store';

@Component({
  selector: 'prive-overlay-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    OverlayToastComponentStore,
  ]
})
export class PriveOverlayToastComponent {

  @Input()
  @Optional()
  public set uuid(uuid: string | undefined) {
    if (uuid) {
      this.store.updateUuid(uuid);
    }
  };

  @Input()
  @Optional()
  public set status(status: OverlayToastStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  };

  @Input()
  @Optional()
  public set style(style: OverlayToastStyleModel | undefined) {
    if (style) {
      this.store.updateStyle(style);
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
  public set text(text: string | undefined) {
    if (text) {
      this.store.updateText(text);
    }
  };

  @Input()
  @Optional()
  public set animationClass(animationClass: string | undefined) {
    if (animationClass) {
      this.store.updateAnimationClass(animationClass);
    }
  };

  public readonly CommonIconSize = CommonIconSizeEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: OverlayToastComponentStore
  ) { }

}
