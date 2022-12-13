import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { CommonIconPackageModel, CommonIconSizeModel, CommonIconTypeModel } from '@data-access-common';
import { CommonIconComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-common-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    CommonIconComponentStore
  ]
})
export class PriveCommonIconComponent {

  @Input()
  @Optional()
  public set icon(icon: CommonIconTypeModel | undefined) {
    if (icon) {
      this.store.updateIcon(icon);
    }
  };

  @Input()
  @Optional()
  public set package(iconPackage: CommonIconPackageModel | undefined) {
    if (iconPackage) {
      this.store.updateIconPackage(iconPackage);
    }
  };

  @Input()
  @Optional()
  public set size(size: CommonIconSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  };

  @Input()
  @Optional()
  public set fixedWidth(fixedWidth: boolean | undefined) {
    if (typeof fixedWidth === 'boolean') {
      this.store.updateFixedWidth(fixedWidth);
    }
  };

  @Input()
  @Optional()
  public set isOval(isOval: boolean | undefined) {
    if (typeof isOval === 'boolean') {
      this.store.updateIsOval(isOval);
    }
  };

  @Input()
  @Optional()
  public set extraClass(extraClass: string | undefined) {
    if (extraClass) {
      this.store.updateExtraClass(extraClass);
    }
  };

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonIconComponentStore
  ) { }
}
