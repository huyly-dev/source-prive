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
  CommonIconCheckEnum,
  CommonIconGlobalEnum,
  CommonIconLoadingEnum,
  CommonIconPackageEnum,
  CommonToggleSizeModel
} from '@data-access-common';
import {
  CommonToggleComponentStore
} from '@data-access-store';

@Component({
  selector: 'prive-common-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonToggleComponentStore
  ]
})
export class PriveCommonToggleComponent {

  @Output()
  public readonly selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  @Optional()
  public set selected(selected: boolean | undefined) {
    if (typeof selected === 'boolean') {
      this.store.updateSelected(selected);
    }
  };

  @Input()
  @Optional()
  public set size(size: CommonToggleSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  };

  @Input()
  @Optional()
  public set loading(loading: boolean | undefined) {
    if (typeof loading === 'boolean') {
      this.store.updateLoading(loading);
    }
  };

  @Input()
  @Optional()
  public set disabled(disabled: boolean | undefined) {
    if (typeof disabled === 'boolean') {
      this.store.updateDisabled(disabled);
    }
  };

  public readonly state$ = this.store.state$;

  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconCheck = CommonIconCheckEnum;
  public readonly CommonIconGlobal = CommonIconGlobalEnum;
  public readonly CommonIconLoading = CommonIconLoadingEnum;

  constructor(
    protected readonly store: CommonToggleComponentStore
  ) {
  }

  public toggle(): void {
    this.store.toggle((state) => {
      this.selectedChange.emit(state.selected);
    });
  }
}
