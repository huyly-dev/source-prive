import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import {
  OverlayCdkPositionModel
} from '@data-access-overlay';
import {
  OverlayCdkNotificationComponentStore,
} from '@data-access-store';

@Component({
  selector: 'prive-overlay-cdk-notification',
  templateUrl: './cdk-notification.component.html',
  styleUrls: ['./cdk-notification.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    OverlayCdkNotificationComponentStore,
  ]
})
export class PriveOverlayCdkNotificationComponent {

  @Input()
  @Optional()
  public set position(position: OverlayCdkPositionModel | undefined) {
    if (position) {
      this.store.updatePosition(position);
    }
  };

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: OverlayCdkNotificationComponentStore
  ) { }

}
