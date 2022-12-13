import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import {
  CommonLinkSizeModel,
  CommonLinkStatusEnum,
  CommonLinkStatusModel,
  CommonLinkTargetModel,
  CommonIconPackageModel,
  CommonIconTypeModel
} from '@data-access-common';
import {
  CommonLinkComponentStore
} from '@data-access-store';

@Component({
  selector: 'prive-common-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonLinkComponentStore
  ]
})
export class PriveCommonLinkComponent {

  @Input()
  @Optional()
  public set status(status: CommonLinkStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
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
  public set isOval(isOval: boolean | undefined) {
    if (typeof isOval === 'boolean') {
      this.store.updateIsOval(isOval);
    }
  };

  @Input()
  @Optional()
  public set size(size: CommonLinkSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
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
  public set link(link: string | undefined) {
    if (link) {
      this.store.updateLink(link);
    }
  };

  @Input()
  @Optional()
  public set target(target: CommonLinkTargetModel | undefined) {
    if (target) {
      this.store.updateTarget(target);
    }
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

  public readonly CommonLinkStatus = CommonLinkStatusEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonLinkComponentStore
  ) { }

  public navigate(event: MouseEvent): void {
    event.preventDefault();
    this.store.navigate();
  }

}
