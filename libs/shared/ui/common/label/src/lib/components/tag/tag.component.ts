import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {
  CommonIconGlobalEnum,
  CommonIconPackageEnum,
  CommonIconPackageModel,
  CommonIconSizeEnum,
  CommonIconTypeModel,
} from '@data-access-common';
import {
  CommonLabelTagComponentStore,
} from '@data-access-store';

@Component({
  selector: 'prive-common-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonLabelTagComponentStore,
  ]
})
export class PriveCommonLabelTagComponent {

  @Output()
  public readonly remove: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Input()
  @Optional()
  public set removable(removable: boolean | undefined) {
    if (typeof removable === 'boolean') {
      this.store.updateRemovable(removable);
    }
  };

  @Input()
  @Optional()
  public set oval(oval: boolean | undefined) {
    if (typeof oval === 'boolean') {
      this.store.updateOval(oval);
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
  public set label(label: string | undefined) {
    if (label) {
      this.store.updateLabel(label);
    }
  };

  @Input()
  @Optional()
  public set icon(icon: CommonIconTypeModel | undefined) {
    this.store.updateIcon(icon);
  };

  @Input()
  @Optional()
  public set package(iconPackage: CommonIconPackageModel | undefined) {
    this.store.updateIconPackage(iconPackage);
  };

  @Input()
  @Optional()
  public set extraClass(extraClass: string | undefined) {
    if (extraClass) {
      this.store.updateExtraClass(extraClass);
    }
  };

  public readonly IconSize = CommonIconSizeEnum;
  public readonly IconPackage = CommonIconPackageEnum;
  public readonly IconGlobal = CommonIconGlobalEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonLabelTagComponentStore
  ) { }
}
