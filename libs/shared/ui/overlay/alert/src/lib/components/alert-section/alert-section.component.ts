import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import {
  OverlayAlertStatusModel
} from '@data-access-overlay';
import {
  CommonIconSizeEnum,
} from '@data-access-common';
import {
  OverlayAlertSectionComponentStore,
} from '@data-access-store';

@Component({
  selector: 'prive-overlay-alert-section',
  templateUrl: './alert-section.component.html',
  styleUrls: ['./alert-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    OverlayAlertSectionComponentStore,
  ]
})
export class PriveOverlayAlertSectionComponent {

  @Input()
  @Optional()
  public set status(status: OverlayAlertStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
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
  public set title(title: string | undefined) {
    if (title) {
      this.store.updateTitle(title);
    }
  };

  @Input()
  @Optional()
  public set textOnly(textOnly: boolean | undefined) {
    if (typeof textOnly === 'boolean') {
      this.store.updateTextOnly(textOnly);
    }
  };

  public readonly IconSize = CommonIconSizeEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: OverlayAlertSectionComponentStore
  ) { }
}
