import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'prive-landing-home-otc-preview',
  templateUrl: './otc-preview.component.html',
  styleUrls: ['./otc-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriveLandingHomeShellUIOtcPreviewComponent {
  public openOtcTrading(): void {
    window.open('/otc-trading', '_blank', 'noopener, noreferrer');
  }
}
