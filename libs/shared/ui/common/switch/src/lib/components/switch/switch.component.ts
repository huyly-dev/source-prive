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
  IFilterOption
} from '@data-access-common';
import {
  CommonSwitchComponentStore
} from '@data-access-store';

@Component({
  selector: 'prive-common-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonSwitchComponentStore,
  ]
})
export class PriveCommonSwitchComponent<TData> {

  @Output()
  public readonly selectedChange: EventEmitter<IFilterOption<TData>> = new EventEmitter<IFilterOption<TData>>();

  @Input()
  @Optional()
  public set options(options: IFilterOption<TData>[] | undefined) {
    if (options) {
      this.store.updateOptions(options);
    }
  };

  @Input()
  @Optional()
  public set selected(selected: string | undefined) {
    this.store.updateSelected(selected);
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
    protected readonly store: CommonSwitchComponentStore<TData>
  ) { }

  public selectItem(option: IFilterOption<TData>): void {
    if (!option.disabled) {
      this.selected = option.key;
      this.selectedChange.emit(option);
    }
  }
}
