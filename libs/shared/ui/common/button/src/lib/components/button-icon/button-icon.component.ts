import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { CommonIconPackageModel, CommonIconTypeModel } from '@data-access-common';
import { CommonButtonComponentStore } from '@data-access-store';
import { PriveCommonButtonComponent } from '../button/button.component';

@Component({
  selector: 'prive-common-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    CommonButtonComponentStore
  ]
})
export class PriveCommonButtonIconComponent extends PriveCommonButtonComponent {

  @Input()
  @Optional()
  public set icon(icon: CommonIconTypeModel | undefined) {
    if (icon) {
      this.store.updateIcon(icon);
    }
  }

  @Input()
  @Optional()
  public set iconPackage(iconPackage: CommonIconPackageModel | undefined) {
    if (iconPackage) {
      this.store.updateIconPackage(iconPackage);
    }
  }

  @Input()
  @Optional()
  public set isOval(isOval: boolean | undefined) {
    if (typeof isOval === 'boolean') {
      this.store.updateIsOval(isOval);
    }
  }

}
