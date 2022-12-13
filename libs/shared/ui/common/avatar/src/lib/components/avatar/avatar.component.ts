import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { CommonAvatarSizeModel, CommonAvatarStyleModel, CommonColorModel } from '@data-access-common';
import { CommonAvatarComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-common-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonAvatarComponentStore,
  ]
})
export class PriveCommonAvatarComponent {

  @Input()
  @Optional()
  public set size(size: CommonAvatarSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  }

  @Input()
  @Optional()
  public set style(style: CommonAvatarStyleModel | undefined) {
    if (style) {
      this.store.updateStyle(style);
    }
  }

  @Input()
  @Optional()
  public set backgroundColor(backgroundColor: CommonColorModel | undefined) {
    if (backgroundColor) {
      this.store.updateBackgroundColor(backgroundColor);
    }
  }

  @Input()
  @Optional()
  public set textColor(textColor: CommonColorModel | undefined) {
    if (textColor) {
      this.store.updateTextColor(textColor);
    }
  }

  @Input()
  @Optional()
  public set shortName(shortName: string | undefined) {
    if (shortName) {
      this.store.updateShortName(shortName);
    }
  }

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonAvatarComponentStore
  ) { }

}
