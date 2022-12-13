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
  CommonIconGlobalEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum
} from '@data-access-common';
import {
  OverlayAlertActionTypeEnum,
  OverlayAlertStatusModel,
  OverlayAlertStyleEnum,
  OverlayAlertStyleModel
} from '@data-access-overlay';
import { OverlayAlertComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-overlay-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    OverlayAlertComponentStore,
  ]
})
export class PriveOverlayAlertComponent {

  @Output()
  public readonly close: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Input()
  @Optional()
  public set status(status: OverlayAlertStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  };

  @Input()
  @Optional()
  public set style(style: OverlayAlertStyleModel | undefined) {
    if (style) {
      this.store.updateStyle(style);
    }
  };

  @Input()
  @Optional()
  public set text(text: string | undefined) {
    if (text) {
      this.store.updateText(text);
    }
  };

  @Input()
  @Optional()
  public set title(title: string | undefined) {
    if (title) {
      this.store.updateTitle(title);
    }
  };

  @Input()
  @Optional()
  public set collapsed(collapsed: boolean | undefined) {
    if (typeof collapsed === 'boolean') {
      this.store.updateCollapsed(collapsed);
    }
  };

  @Input()
  @Optional()
  public set showStatusIcon(showStatusIcon: boolean | undefined) {
    if (typeof showStatusIcon === 'boolean') {
      this.store.updateShowStatusIcon(showStatusIcon);
    }
  };

  public readonly OverlayAlertStyle = OverlayAlertStyleEnum;
  public readonly OverlayAlertActionType = OverlayAlertActionTypeEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconGlobal = CommonIconGlobalEnum;
  public readonly CommonIconArrow = CommonIconArrowEnum;

  public readonly state$ = this.store.state$;

  protected initHeight!: number;

  constructor(
    protected readonly store: OverlayAlertComponentStore
  ) { }

  public toggle(): void {
    this.store.toggle();
  }
}
