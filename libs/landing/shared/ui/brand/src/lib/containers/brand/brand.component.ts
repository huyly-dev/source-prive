import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LandingBrandComponentStore } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LandingBrandComponentStore]
})
export class PriveLandingSharedUIBrandComponent {
  @Input()
  public titleLinear = false;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: LandingBrandComponentStore
  ) { }

}
