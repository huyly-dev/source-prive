import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'prive-landing-private-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingPrivateShellUIBannerComponent {

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

  public scrollToLandingForm(): void {
    this.documentRef.getElementById('landingForm')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
