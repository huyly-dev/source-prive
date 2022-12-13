import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import {
  CommonLabelBadgeStatusModel
} from '@data-access-common';
import {
  CommonLabelBadgeComponentStore
} from '@data-access-store';

@Component({
  selector: 'prive-common-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonLabelBadgeComponentStore,
  ]
})
export class PriveCommonLabelBadgeComponent {

  @Input()
  @Optional()
  public set status(status: CommonLabelBadgeStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  };

  @Input()
  @Optional()
  public set isDot(isDot: boolean | undefined) {
    if (typeof isDot === 'boolean') {
      this.store.updateIsDot(isDot);
    }
  };

  @Input()
  @Optional()
  public set label(label: string | undefined) {
    if (label) {
      this.store.updateLabel(label);
    }
  };

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonLabelBadgeComponentStore
  ) { }

}
