import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { LandingLayoutComponentStore } from '@landing-shared-data-access-store';
import { CdkService } from '@data-access-service';
import { CommonIconArrowEnum, CommonIconPackageEnum } from '@data-access-common';

@Component({
  selector: 'prive-landing-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    LandingLayoutComponentStore
  ]
})
export class PriveLandingShellUILayoutComponent {
  @ViewChild('top')
  public readonly top!: ElementRef<HTMLDivElement>;

  public readonly showBottomButton$ = this.store.showBottomButton$;

  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconArrow = CommonIconArrowEnum;

  constructor(
    protected readonly cdk: CdkService,
    protected readonly store: LandingLayoutComponentStore
  ) { }

  public scrolling(event: Event): void {
    this.cdk.updateScroll(event as MouseEvent);
    const { scrollTop } = event.target as HTMLDivElement;
    this.store.onScroll(scrollTop);
  }

  public scrollTop(): void {
    this.top.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
