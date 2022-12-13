import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PriveMainLayoutEnum } from '@main-shared-data-access-variable';
import { PriveMainLayoutComponentStore } from '@main-shared-data-access-store';

@Component({
  selector: 'prive-main-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    PriveMainLayoutComponentStore,
  ]
})
export class PriveMainShellUILayoutComponent {

  public readonly state$ = this.store.state$;

  public readonly PriveMainLayout = PriveMainLayoutEnum;

  constructor(
    protected readonly store: PriveMainLayoutComponentStore
  ) { }
}
