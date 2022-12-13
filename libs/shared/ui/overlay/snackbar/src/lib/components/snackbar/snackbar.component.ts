import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import {
  OverlayCdkPositionModel,
  OverlaySnackbarSizeModel,
  OverlaySnackbarStatusModel,
  OverlaySnackbarStyleModel
} from '@data-access-overlay';
import {
  CommonButtonSizeEnum,
  CommonIconAlertEnum,
  CommonIconGlobalEnum,
  CommonIconPackageEnum,
  CommonIconSizeEnum,
  CommonLinkSizeEnum
} from '@data-access-common';
import { OverlaySnackbarComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-overlay-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    OverlaySnackbarComponentStore,
  ]
})
export class PriveOverlaySnackbarComponent {

  @Input()
  @Optional()
  public set uuid(uuid: string | undefined) {
    if (uuid) {
      this.store.updateUuid(uuid);
    }
  };

  @Input()
  @Optional()
  public set style(style: OverlaySnackbarStyleModel | undefined) {
    if (style) {
      this.store.updateStyle(style);
    }
  };

  @Input()
  @Optional()
  public set size(size: OverlaySnackbarSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  };

  @Input()
  @Optional()
  public set status(status: OverlaySnackbarStatusModel | undefined) {
    if (status) {
      this.store.updateStatus(status);
    }
  };

  @Input()
  @Optional()
  public set position(position: OverlayCdkPositionModel | undefined) {
    if (position) {
      this.store.updatePosition(position);
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
  public set text(text: string | undefined) {
    if (text) {
      this.store.updateText(text);
    }
  };

  @Input()
  @Optional()
  public set buttonLeftText(buttonLeftText: string | undefined) {
    if (buttonLeftText) {
      this.store.updateButtonLeftText(buttonLeftText);
    }
  };

  @Input()
  @Optional()
  public set buttonRightText(buttonRightText: string | undefined) {
    if (buttonRightText) {
      this.store.updateButtonRightText(buttonRightText);
    }
  };

  @Input()
  @Optional()
  public set animationClass(animationClass: string | undefined) {
    if (animationClass) {
      this.store.updateAnimationClass(animationClass);
    }
  };

  public readonly CommonIconPackage = CommonIconPackageEnum;
  public readonly CommonIconAlert = CommonIconAlertEnum;
  public readonly CommonIconSize = CommonIconSizeEnum;
  public readonly CommonIconGlobal = CommonIconGlobalEnum;
  public readonly CommonButtonSize = CommonButtonSizeEnum;
  public readonly CommonLinkSize = CommonLinkSizeEnum;

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: OverlaySnackbarComponentStore
  ) { }

  public close(): void {
    // this.store.close(this.position, this.uuid);
  }
}
