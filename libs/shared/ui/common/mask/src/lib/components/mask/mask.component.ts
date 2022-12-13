import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonMaskComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-common-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonMaskComponentStore,
  ]
})
export class PriveCommonMaskComponent {

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonMaskComponentStore
  ) { }

}
