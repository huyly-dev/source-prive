import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'prive-landing-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingSharedUIFormComponent {
  @Input()
  public titleLinear = false;
}
