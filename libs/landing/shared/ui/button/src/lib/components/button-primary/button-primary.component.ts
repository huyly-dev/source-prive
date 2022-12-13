import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'prive-landing-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingSharedUIButtonPrimaryComponent {
  @Input()
  public content = 'Find out more';
  @Input()
  public fullWidth = false;
}
