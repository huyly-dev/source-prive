import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LandingFooterSection } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-footer-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingShellUIFooterExtraComponent {

  @Input()
  public sections: LandingFooterSection[] = [];

  public get firstSections(): LandingFooterSection[] {
    const list: LandingFooterSection[] = [];
    list.push(this.sections[0]);
    return list;
  }

  public get secondSections(): LandingFooterSection[] {
    const list: LandingFooterSection[] = [];
    list.push(this.sections[1]);
    list.push(this.sections[2]);
    return list;
  }
}
