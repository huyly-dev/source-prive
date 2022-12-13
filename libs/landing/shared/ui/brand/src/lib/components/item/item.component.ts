import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';
import { LandingBrandItem } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-brand-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingSharedUIBrandItemComponent {
  @Input()
  public brand!: LandingBrandItem;
}
