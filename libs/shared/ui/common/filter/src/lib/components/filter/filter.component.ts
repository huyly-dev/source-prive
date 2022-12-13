import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import {
  CommonFilterSizeModel,
  CommonFilterStatusModel,
  CommonIconPackageModel,
  CommonIconTypeModel
} from '@data-access-common';
import {
  CommonFilterComponentStore,
} from '@data-access-store';

@Component({
  selector: 'prive-common-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonFilterComponentStore,
  ]
})
export class PriveCommonFilterComponent {

  @Input()
  @Optional()
  public set size(size: CommonFilterSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  };

  @Input()
  @Optional()
  public set status(status: CommonFilterStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  };

  @Input()
  @Optional()
  public set content(content: string | undefined) {
    if (content) {
      this.store.updateContent(content);
    }
  };

  @Input()
  @Optional()
  public set iconLeft(iconLeft: CommonIconTypeModel | undefined) {
    this.store.updateIconLeft(iconLeft);
  };

  @Input()
  @Optional()
  public set packageIconLeft(packageIconLeft: CommonIconPackageModel | undefined) {
    this.store.updatePackageIconLeft(packageIconLeft);
  };

  @Input()
  @Optional()
  public set iconRight(iconRight: CommonIconTypeModel | undefined) {
    this.store.updateIconRight(iconRight);
  };

  @Input()
  @Optional()
  public set packageIconRight(packageIconRight: CommonIconPackageModel | undefined) {
    this.store.updatePackageIconRight(packageIconRight);
  };

  @Input()
  @Optional()
  public set extraClass(extraClass: string | undefined) {
    if (extraClass) {
      this.store.updateExtraClass(extraClass);
    }
  };

  @Input()
  @Optional()
  public set disabled(disabled: boolean | undefined) {
    if (typeof disabled === 'boolean') {
      this.store.updateDisabled(disabled);
    }
  };

  @Input()
  @Optional()
  public set active(active: boolean | undefined) {
    if (typeof active === 'boolean') {
      this.store.updateActive(active);
    }
  };

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonFilterComponentStore
  ) { }

}
