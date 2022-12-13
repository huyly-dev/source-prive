import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OverlayCdkComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-overlay-cdk',
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    OverlayCdkComponentStore,
  ]
})
export class PriveOverlayCdkComponent {

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: OverlayCdkComponentStore
  ) { }

}
