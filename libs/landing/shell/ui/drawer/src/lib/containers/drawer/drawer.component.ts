import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { LandingDrawerComponentStore, LandingDrawerState } from '@landing-shared-data-access-store';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'prive-landing-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    LandingDrawerComponentStore
  ]
})
export class PriveLandingShellUIDrawerComponent {

  @ViewChild('content')
  public readonly content!: ElementRef<HTMLDivElement>;

  public readonly state$ = combineLatest([
    this.store.state$,
    this.store.showDrawer$
  ]).pipe(
    map(([state, showDrawer]) => ({ ...state, showDrawer } as LandingDrawerState & { showDrawer: boolean }))
  );

  constructor(
    protected readonly store: LandingDrawerComponentStore
  ) {
  }

  public outsideClick(event: MouseEvent): void {
    const { target } = event;
    if ((target as HTMLDivElement).contains(this.content.nativeElement) && target !== this.content.nativeElement) {
      this.store.closeDrawer();
    }
  }
}
