import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import {
  CommonLabelLozengesSizeModel,
  CommonLabelLozengesStatusModel,
  CommonLabelLozengesStyleModel,
  CommonIconPackageModel,
  CommonIconSizeEnum,
  CommonIconTypeModel,
} from '@data-access-common';
import {
  CommonLabelLozengesComponentStore,
} from '@data-access-store';

@Component({
  selector: 'prive-common-lozenges',
  templateUrl: './lozenges.component.html',
  styleUrls: ['./lozenges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    CommonLabelLozengesComponentStore,
  ]
})
export class PriveCommonLabelLozengesComponent {

  @Input()
  @Optional()
  public set status(status: CommonLabelLozengesStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  };

  @Input()
  @Optional()
  public set style(style: CommonLabelLozengesStyleModel | undefined) {
    if (style) {
      this.store.updateStyle(style);
    }
  };

  @Input()
  @Optional()
  public set size(size: CommonLabelLozengesSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
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

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonLabelLozengesComponentStore
  ) { }

}
