import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'prive-landing-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingSharedUIMemberComponent {
  @Input()
  public titleLinear = false;
}
