import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { OverlayCdkPositionEnum, OverlayCdkTriggerEnum, OverlayPopoverSizeEnum } from '@data-access-overlay';
import {
  CommonButtonStatusEnum,
  CommonIconAlertEnum,
  CommonIconGlobalEnum,
  CommonIconLogoEnum,
  CommonIconPackageEnum,
  CommonIconPersonEnum,
  CommonIconSizeEnum,
  CommonNavigationItemSizeEnum,
  CommonNavigationItemStatusEnum,
  CommonNavigationItemStyleEnum,
  INavigationItem
} from '@data-access-common';
import { CommonNavigationHorizontalComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-common-navigation-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonNavigationHorizontalComponentStore,
  ]
})
export class PriveCommonNavigationHorizontalComponent {

  @Output()
  public readonly selectedChange: EventEmitter<INavigationItem | undefined> = new EventEmitter<INavigationItem | undefined>();

  @Output()
  public readonly selectedOrgChange: EventEmitter<INavigationItem | undefined> = new EventEmitter<INavigationItem | undefined>();

  @Input()
  @Optional()
  public set selected(selected: string | undefined) {
    this.store.updateSelected(selected);
  };

  @Input()
  @Optional()
  public set selectedOrg(selectedOrg: string | undefined) {
    this.store.updateSelectedOrg(selectedOrg);
  };

  @Input()
  @Optional()
  public set isLogin(isLogin: boolean | undefined) {
    if (typeof isLogin === 'boolean') {
      this.store.updateIsLogin(isLogin);
    }
  };

  @Input()
  @Optional()
  public set orgs(orgs: INavigationItem[] | undefined) {
    this.store.updateOrgs(orgs || []);
  };

  public readonly CommonIconLogo = CommonIconLogoEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconGlobal = CommonIconGlobalEnum;
  public readonly CommonIconAlert = CommonIconAlertEnum;
  public readonly CommonIconPerson = CommonIconPersonEnum;
  public readonly OverlayCdkPosition = OverlayCdkPositionEnum;
  public readonly OverlayCdkTrigger = OverlayCdkTriggerEnum;
  public readonly CommonButtonStatus = CommonButtonStatusEnum;
  public readonly OverlayPopoverSize = OverlayPopoverSizeEnum;
  public readonly CommonNavigationItemStyle = CommonNavigationItemStyleEnum;
  public readonly CommonNavigationItemStatus = CommonNavigationItemStatusEnum;
  public readonly CommonNavigationItemSize = CommonNavigationItemSizeEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonNavigationHorizontalComponentStore,
  ) { }

  public selectItem(item: INavigationItem): void {
    if (!item.items) {
      this.selected = item.key;
      this.selectedChange.emit(item);
    }
  }

  public selectOrg(item: INavigationItem): void {
    this.selectedOrg = item.key;
    this.selectedOrgChange.emit(item);
  }

  public updateShowDropdownOrg(showDropdownOrg: boolean): void {
    this.store.updateShowDropdownOrg(showDropdownOrg);
  }

}
