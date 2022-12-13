import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'prive-landing-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingSharedUIFlowComponent {
  @Input()
  public titleLinear = false;
}
