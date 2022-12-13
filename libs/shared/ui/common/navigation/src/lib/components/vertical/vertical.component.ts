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
  CommonLabelLozengesSizeEnum,
  CommonLabelLozengesStatusEnum,
  CommonLabelLozengesStyleEnum,
  CommonNavigationItemSizeEnum,
  CommonNavigationItemStatusEnum,
  CommonNavigationItemStyleEnum,
  INavigationItem
} from '@data-access-common';
import {
  CommonNavigationVerticalComponentStore
} from '@data-access-store';

@Component({
  selector: 'prive-common-navigation-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonNavigationVerticalComponentStore
  ]
})
export class PriveCommonNavigationVerticalComponent {

  @Output()
  public readonly selectedChange: EventEmitter<INavigationItem | undefined> = new EventEmitter<INavigationItem | undefined>();

  @Input()
  @Optional()
  public set selected(selected: string | undefined) {
    if (selected) {
      this.store.updateSelected(selected);
    }
  };

  @Input()
  @Optional()
  public set name(name: string | undefined) {
    if (name) {
      this.store.updateName(name);
    }
  };

  @Input()
  @Optional()
  public set org(org: string | undefined) {
    if (org) {
      this.store.updateOrg(org);
    }
  };

  @Input()
  @Optional()
  public set role(role: string | undefined) {
    if (role) {
      this.store.updateRole(role);
    }
  };

  public readonly CommonNavigationItemStatus = CommonNavigationItemStatusEnum;
  public readonly CommonNavigationItemSize = CommonNavigationItemSizeEnum;
  public readonly CommonLabelLozengesSize = CommonLabelLozengesSizeEnum;
  public readonly CommonLabelLozengesStyle = CommonLabelLozengesStyleEnum;
  public readonly CommonLabelLozengesStatus = CommonLabelLozengesStatusEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonNavigationVerticalComponentStore
  ) { }

  public selectItem(item: INavigationItem): void {
    this.selected = item.key;
    this.selectedChange.emit(item);
  }

}
