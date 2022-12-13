import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'prive-landing-otc-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingOtcShellUIWhatComponent {

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

  public scrollToLandingForm(): void {
    this.documentRef.getElementById('landingForm')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
