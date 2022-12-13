import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { LandingAboutComponentStore } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    LandingAboutComponentStore
  ]

})
export class PriveLandingSharedUIAboutComponent {

  @Input()
  public set titleLinear(titleLinear: boolean) {
    this.store.setTitleLinear(titleLinear);
  };

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: LandingAboutComponentStore
  ) { }

}
