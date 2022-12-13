import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LandingAboutCard } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-about-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingSharedUIAboutCardComponent {
  @Input()
  public card!: LandingAboutCard;

  @Input()
  public inside = false;
}
