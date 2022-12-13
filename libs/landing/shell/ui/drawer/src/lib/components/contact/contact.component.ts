import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonIconArrowEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';
import { LandingDrawerSection } from '@landing-shared-data-access-store';

@Component({
  selector: 'prive-landing-drawer-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriveLandingShellUIDrawerContactComponent {

  @Input()
  public sections: LandingDrawerSection[] = [];

  public active: string | undefined;

  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconArrow = CommonIconArrowEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;

  public change(state: string): void {
    this.active = this.active === state ? undefined : state;
  }
}
