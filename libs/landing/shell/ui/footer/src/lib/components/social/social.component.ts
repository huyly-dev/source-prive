import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LandingFooterSocial } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-footer-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingShellUIFooterSocialComponent {

  @Input()
  public socials: LandingFooterSocial[] = [];

}
