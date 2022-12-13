import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { CommonIconPackageModel, CommonIconTypeModel } from '@data-access-common';
import { CommonTabComponentStore } from '@data-access-store';

@Component({
  selector: 'prive-common-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    CommonTabComponentStore,
  ]
})
export class PriveCommonTabComponent {

  public set key(key: string) {
    this.store.updateKey(key);
  };

  @Input()
  @Optional()
  public set title(title: string) {
    this.store.updateTitle(title);
  };

  @Input()
  @Optional()
  public set icon(icon: CommonIconTypeModel | undefined) {
    this.store.updateIcon(icon);
  };

  @Input()
  @Optional()
  public set package(iconPackage: CommonIconPackageModel | undefined) {
    this.store.updateIconPackage(iconPackage);
  };

  @Input()
  @Optional()
  public set disabled(disabled: boolean) {
    this.store.updateDisabled(disabled);
  };

  @Input()
  @Optional()
  public set active(active: boolean) {
    this.store.updateActive(active);
  };

  public readonly state$ = this.store.state$;

  constructor(
    protected readonly store: CommonTabComponentStore,
  ) { }

}
