import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';

import { OverlayCdkPositionEnum, OverlayCdkTriggerEnum } from '@data-access-overlay';
import {
  CommonAvatarSizeEnum,
  CommonAvatarTypeEnum,
  CommonButtonStatusEnum,
  CommonIconArrowEnum,
  CommonIconGlobalEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum,
  CommonNavigationItemSizeModel,
  CommonNavigationItemStatusEnum,
  CommonNavigationItemStatusModel,
  CommonNavigationItemStyleEnum,
  CommonNavigationItemStyleModel,
  INavigationItem
} from '@data-access-common';
import { CommonNavigationItemComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-common-navigation-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonNavigationItemComponentStore
  ]
})
export class PriveCommonNavigationItemComponent {

  @Input()
  @Optional()
  public set status(status: CommonNavigationItemStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  };

  @Input()
  @Optional()
  public set style(style: CommonNavigationItemStyleModel | undefined) {
    if (style) {
      this.store.updateStyle(style);
    }
  };

  @Input()
  @Optional()
  public set size(size: CommonNavigationItemSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  };

  @Input()
  @Optional()
  public set typeCheck(typeCheck: 'route' | 'selected' | undefined) {
    if (typeCheck) {
      this.store.updateTypeCheck(typeCheck);
    }
  };

  @Input()
  @Optional()
  public set item(item: INavigationItem | undefined) {
    this.store.updateItem(item);
  };

  @Input()
  @Optional()
  public set isAvatar(isAvatar: boolean | undefined) {
    if (typeof isAvatar === 'boolean') {
      this.store.updateIsAvatar(isAvatar);
    }
  };

  @Input()
  @Optional()
  public set selected(selected: string | undefined) {
    this.store.updateSelected(selected);
  };

  @Input()
  @Optional()
  public set expanded(expanded: boolean | undefined) {
    if (typeof expanded === 'boolean') {
      this.store.updateExpanded(expanded);
    }
  };

  @Input()
  @Optional()
  public set haveChild(haveChild: boolean | undefined) {
    if (typeof haveChild === 'boolean') {
      this.store.updateHaveChild(haveChild);
    }
  };

  public readonly CommonNavigationItemStyle = CommonNavigationItemStyleEnum;
  public readonly CommonNavigationItemStatus = CommonNavigationItemStatusEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconArrow = CommonIconArrowEnum;
  public readonly CommonIconGlobal = CommonIconGlobalEnum;
  public readonly OverlayCdkPosition = OverlayCdkPositionEnum;
  public readonly OverlayCdkTrigger = OverlayCdkTriggerEnum;
  public readonly CommonButtonStatus = CommonButtonStatusEnum;
  public readonly CommonAvatarSize = CommonAvatarSizeEnum;
  public readonly CommonAvatarType = CommonAvatarTypeEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonNavigationItemComponentStore
  ) { }

}
