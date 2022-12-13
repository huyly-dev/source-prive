import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import {
  OverlayAlertSizeModel,
  OverlayAlertStatusModel
} from '@data-access-overlay';
import {
  CommonIconSizeEnum,
} from '@data-access-common';
import {
  OverlayAlertInlineComponentStore,
} from '@data-access-store';

@Component({
  selector: 'prive-overlay-alert-inline',
  templateUrl: './alert-inline.component.html',
  styleUrls: ['./alert-inline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    OverlayAlertInlineComponentStore,
  ]
})
export class PriveOverlayAlertInlineComponent {

  @Input()
  @Optional()
  public set status(status: OverlayAlertStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  };

  @Input()
  @Optional()
  public set size(size: OverlayAlertSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  };

  @Input()
  @Optional()
  public set text(text: string | undefined) {
    if (text) {
      this.store.updateText(text);
    }
  };

  public readonly CommonIconSize = CommonIconSizeEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: OverlayAlertInlineComponentStore
  ) { }

}
