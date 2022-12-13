import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Input, Optional,
  Output,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { OverlayModalSizeModel, OverlayModalStatusEnum, OverlayModalStatusModel } from '@data-access-overlay';
import { CommonIconGlobalEnum, CommonIconPackageEnum, CommonIconSizeEnum } from '@data-access-common';
import { OverlayModalComponentStore } from '@data-access-store';
import {
  PriveOverlayModalBodyDirective,
  PriveOverlayModalFooterDirective,
  PriveOverlayModalHeaderDirective
} from '../../directives';
import { map } from 'rxjs/operators';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'prive-overlay-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    OverlayModalComponentStore
  ],
  host: {
    'class': 'flex items-center justify-center w-full'
  }
})
export class PriveOverlayModalComponent {

  @Output()
  public readonly close: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Input()
  @Optional()
  public set status(status: OverlayModalStatusModel | undefined) {
    this.store.updateStatus(status);
  };

  @Input()
  @Optional()
  public set size(size: OverlayModalSizeModel | undefined) {
    if (size) {
      this.store.updateSize(size);
    }
  };

  @Input()
  @Optional()
  public set title(title: string | undefined) {
    this.store.updateTitle(title);
  };

  @ContentChild(PriveOverlayModalHeaderDirective, { read: TemplateRef, static: true })
  public header!: TemplateRef<HTMLElement>;

  @ContentChild(PriveOverlayModalBodyDirective, { read: TemplateRef, static: true })
  public body!: TemplateRef<HTMLElement>;

  @ContentChild(PriveOverlayModalFooterDirective, { read: TemplateRef, static: true })
  public footer!: TemplateRef<HTMLElement>;

  public readonly CommonIconPackageEnum = CommonIconPackageEnum;
  public readonly CommonIconGlobalEnum = CommonIconGlobalEnum;
  public readonly CommonIconSizeEnum = CommonIconSizeEnum;

  public readonly state$ = combineLatest([
    this.store.state$,
    this.store.animationClass$
  ])
    .pipe(
      map(([state, animationClass]) => ({...state, animationClass})),
    );

  constructor(
    protected readonly store: OverlayModalComponentStore
  ) { }

}
