import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonButtonSideEnum, CommonButtonSideModel } from '@data-access-common';
import { CommonButtonComponentStore } from '@data-access-store';
import { PriveCommonButtonIconComponent } from '../button-icon/button-icon.component';

@Component({
  selector: 'prive-common-button-side-icon',
  templateUrl: './button-side-icon.component.html',
  styleUrls: ['./button-side-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    CommonButtonComponentStore
  ]
})
export class PriveCommonButtonSideIconComponent extends PriveCommonButtonIconComponent {

  @Input()
  public set side(side: CommonButtonSideModel | undefined) {
    if (side) {
      this.store.updateSide(side);
    }
  }

  public readonly ButtonSide = CommonButtonSideEnum;

}
