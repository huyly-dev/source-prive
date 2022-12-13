import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'prive-landing-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingSharedUIBeachComponent {
  @Input()
  public title = '';

  @Input()
  public src = 'prive-assets/images/landing/beach.png';

  @Input()
  public titleLinear = true;

  @Input()
  public buttonText = ''

  @Input()
  public reverse = false;

  @Input() public extraClasses = '';

  @Output() clickedBeachBtn = new EventEmitter<void>();
}
