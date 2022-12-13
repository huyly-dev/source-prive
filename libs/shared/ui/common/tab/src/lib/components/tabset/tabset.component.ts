import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input, Optional,
  Output,
  QueryList,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { uuid } from '@utils-generator';
import {
  FormDropdownOptionTypeEnum,
  IDropdownOption
} from '@data-access-form';
import {
  OverlayCdkPositionEnum
} from '@data-access-overlay';
import {
  CommonIconNavigationEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum,
  CommonTabSizeModel,
  CommonTabStyleEnum,
  CommonTabStyleModel
} from '@data-access-common';
import {
  CommonTabsetComponentStore, CommonTabState
} from '@data-access-store';
import { PriveCommonTabComponent } from '../tab/tab.component';
import { PriveCommonTabMoreDirective } from '../../directives';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'prive-common-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonTabsetComponentStore
  ]
})
export class PriveCommonTabsetComponent implements AfterContentInit {

  @Output()
  public readonly selectedTabChange: EventEmitter<CommonTabState> = new EventEmitter<CommonTabState>();

  @ContentChildren(PriveCommonTabComponent)
  public readonly tabs!: QueryList<PriveCommonTabComponent>;

  @ViewChild(PriveCommonTabMoreDirective)
  public readonly moreDirective!: PriveCommonTabMoreDirective;

  @Input()
  @Optional()
  public set style(style: CommonTabStyleModel) {
    this.store.updateStyle(style);
  };

  @Input()
  @Optional()
  public set size(size: CommonTabSizeModel) {
    this.store.updateSize(size);
  };

  public set selectedKey(selectedKey: string | undefined) {
    this.store.updateSelectedKey(selectedKey);
  };

  public get tabs$(): Observable<IDropdownOption<CommonTabState>[]> {
    return combineLatest(
      this.tabs.map((tab) => tab.state$)
    ).pipe(
      map((tabs) => tabs.map((state) => (
        {
          label: state.title,
          value: state,
          key: state.key,
          disabled: state.disabled,
          icon: state.icon,
          package: state.iconPackage
        }
      ))),
    );
  }

  public readonly CommonTabStyle = CommonTabStyleEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconNavigation = CommonIconNavigationEnum;
  public readonly OverlayCdkPosition = OverlayCdkPositionEnum;
  public readonly FormDropdownOptionType = FormDropdownOptionTypeEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonTabsetComponentStore
  ) { }

  public ngAfterContentInit(): void {
    this.traversalKey();
  }

  public selectTab(tab: CommonTabState): void {
    this.selectedTabChange.emit(tab);
    this.selectedKey = tab.key;
  }

  public scroll(): void {
    this.moreDirective.scroll();
  }

  protected traversalKey(): void {
    const firstKey = uuid();
    this.tabs.forEach((tab, i) => {
      if (i === 0) {
        tab.key = firstKey;
      } else {
        tab.key = uuid();
      }
    });
    this.store.initKey(firstKey);
  }
}
