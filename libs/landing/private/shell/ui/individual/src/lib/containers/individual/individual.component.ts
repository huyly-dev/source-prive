import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonIconArrowEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'prive-landing-private-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingPrivateShellUIIndividualComponent {

  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconArrow = CommonIconArrowEnum;

  constructor(@Inject(DOCUMENT) private readonly documentRef: Document) {}

  public scrollToLandingForm(): void {
    this.documentRef.getElementById('landingForm')?.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
}
