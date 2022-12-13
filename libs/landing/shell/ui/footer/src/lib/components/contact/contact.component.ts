import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LandingFooterSection } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-footer-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingShellUIFooterContactComponent {
  @Input()
  public sections: LandingFooterSection[] = [];
}
