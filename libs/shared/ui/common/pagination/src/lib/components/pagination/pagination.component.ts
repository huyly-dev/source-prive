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
  CommonIconArrowEnum,
  CommonIconCheckEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum
} from '@data-access-common';
import {
  OverlayCdkPositionEnum
} from '@data-access-overlay';
import {
  FormDropdownOptionTypeEnum
} from '@data-access-form';
import {
  CommonPaginationComponentStore
} from '@data-access-store';

@Component({
  selector: 'prive-common-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonPaginationComponentStore
  ]
})
export class PriveCommonPaginationComponent {

  @Output()
  public readonly selectedOptionChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public readonly selectedPageChange: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  @Optional()
  public set pageOptions(pageOptions: number[] | undefined) {
    if (pageOptions) {
      this.store.updatePageOptions(pageOptions);
      this.resetSelectedPage();
    }
  }

  @Input()
  @Optional()
  public set disabled(disabled: boolean | undefined) {
    if (typeof disabled === 'boolean') {
      this.store.updateDisabled(disabled);
    }
  }

  @Input()
  @Optional()
  public set total(total: number | undefined) {
    if (total) {
      this.store.updateTotal(total);
      this.resetSelectedPage();
    }
  }

  @Input()
  @Optional()
  public set selectedOption(selectedOption: number | undefined) {
    if (selectedOption) {
      this.store.updateSelectedOption(selectedOption);
      this.resetSelectedPage();
    }
  }

  @Input()
  @Optional()
  public set selectedPage(selectedPage: number | undefined) {
    if (selectedPage) {
      this.store.updateSelectedPage(selectedPage);
      this.resetSelectedPage();
    }
  }

  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconArrow = CommonIconArrowEnum;
  public readonly CommonIconCheck = CommonIconCheckEnum;
  public readonly OverlayCdkPosition = OverlayCdkPositionEnum;
  public readonly FormDropdownOptionType = FormDropdownOptionTypeEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonPaginationComponentStore
  ) {
  }

  public selectPage(page: number): void {
    this.selectedPage = page;
    this.selectedPageChange.emit(page);
  }

  public selectOption(option: number): void {
    this.selectedOption = option;
    this.selectedOptionChange.emit(option);
  }

  public moveNext(): void {
    this.store.moveNext();
  }

  public movePrevious(): void {
    this.store.movePrevious();
  }

  protected resetSelectedPage(): void {
    this.store.resetSelectedPage(
      (state) => {
        this.selectedPageChange.emit(state.selectedPage);
      }
    );
  }

}
