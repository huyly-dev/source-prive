import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { CommonButtonSizeModel, CommonButtonStatusModel } from '@data-access-common';
import { CommonButtonComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-common-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    CommonButtonComponentStore,
  ]
})
export class PriveCommonButtonComponent {

  @Optional()
  @Input()
  public set size(size: CommonButtonSizeModel) {
    this.store.updateSize(size);
  }

  @Optional()
  @Input()
  public set status(status: CommonButtonStatusModel) {
    this.store.updateStatus(status);
  }

  @Input()
  public set content(content: string) {
    this.store.updateContent(content);
  }

  @Optional()
  @Input()
  public set extraClass(extraClass: string) {
    this.store.updateExtraClass(extraClass);
  }

  @Optional()
  @Input()
  public set loading(loading: boolean) {
    this.store.updateLoading(loading);
  }

  @Optional()
  @Input()
  public set fullWidth(fullWidth: boolean) {
    this.store.updateFullWidth(fullWidth);
  }

  @Optional()
  @Input()
  public set disabled(disabled: boolean) {
    this.store.updateDisabled(disabled);
  }

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonButtonComponentStore
  ) { }

}
