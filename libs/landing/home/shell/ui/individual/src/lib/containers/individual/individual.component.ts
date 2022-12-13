import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'prive-landing-home-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingHomeShellUIIndividualComponent {
  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

  public scrollToLandingForm(): void {
    this.documentRef.getElementById('landingForm')?.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  }
}
