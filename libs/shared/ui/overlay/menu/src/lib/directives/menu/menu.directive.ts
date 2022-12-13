import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  EventEmitter, HostListener,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Output,
  TemplateRef
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest, EMPTY,
  fromEvent,
  iif,
  Observable
} from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { autoDestroy, followDestroy } from '@utils-observable';
import { tap } from 'rxjs/operators';
import {
  OverlayCdkPositionEnum,
  OverlayCdkPositionModel,
  OverlayCdkTriggerEnum,
  OverlayCdkTriggerModel,
  REM
} from '@data-access-overlay';
import {
  CdkService
} from '@data-access-service';
import { PriveOverlayMenuComponent } from '../../components';

@Directive({
  selector: '[priveOverlayMenu]',
  exportAs: 'priveOverlayMenu'
})
@autoDestroy()
export class PriveOverlayMenuDirective implements OnDestroy, AfterViewInit {
  @Output()
  public readonly menuShowed: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Output()
  public readonly menuClosed: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Input('priveOverlayMenu')
  public template!: TemplateRef<unknown>;

  @Optional()
  @Input('priveOverlayMenuQueryItem')
  public queryItem!: string;

  @Optional()
  @Input('priveOverlayMenuQueryFocusItem')
  public queryFocusItem!: string;

  @Optional()
  @Input('priveOverlayMenuCloseOnClick')
  public closeOnClick!: boolean;

  @Input('priveOverlayMenuPosition')
  public position: OverlayCdkPositionModel = OverlayCdkPositionEnum.Top;

  @Input('priveOverlayMenuTrigger')
  public trigger: OverlayCdkTriggerModel = OverlayCdkTriggerEnum.Click;

  @Input('priveOverlayMenuOffsetLeft')
  public offsetLeft = 0;

  @Input('priveOverlayMenuOffsetRight')
  public offsetRight = 0;

  @Input('priveOverlayMenuOffsetTop')
  public offsetTop = 0;

  @Input('priveOverlayMenuOffsetBottom')
  public offsetBottom = 0;

  @Input('priveOverlayMenuFixed')
  public fixed = false;

  @Input('priveOverlayMenuDisabled')
  public disabled = false;

  @Optional()
  @Input('priveOverlayMenuCondition')
  set condition(value: boolean) {
    this._condition$.next(value);
  }

  @Optional()
  @Input('priveOverlayMenuCloseOnClickAgain')
  public closeOnClickAgain!: boolean;

  public componentRef!: ComponentRef<PriveOverlayMenuComponent>;

  protected _condition$ = new BehaviorSubject(false);

  protected readonly SPACING = 4;

  protected get isDestroyed(): boolean {
    if (!this.componentRef) {
      return true;
    }

    return this.componentRef.hostView.destroyed;
  }

  protected get wrapper(): HTMLElement {
    const element = this.cdk.getDomElementFromComponentRef(
      this.componentRef
    );
    return element.childNodes.item(0) as HTMLElement;
  }

  protected get queryElement(): HTMLElement {
    return this.queryItem
      ? this._element.nativeElement.querySelector(this.queryItem) as HTMLElement
      : this._element.nativeElement;
  }

  protected get focusElement(): HTMLElement {
    return this.queryFocusItem
      ? this.queryElement.querySelector(this.queryFocusItem) as HTMLElement
      : this.queryElement;
  }

  constructor(
    @Inject(DOCUMENT) protected readonly dom: Document,
    protected readonly _element: ElementRef<HTMLElement>,
    protected readonly cdk: CdkService
  ) {
  }

  public ngAfterViewInit(): void {
    combineLatest([
      this.listenEvent(),
      this.listenUnEvent(),
      this.listenScroll(),
      this.listenClick(),
      this.listenResize()
    ])
      .pipe(followDestroy(this))
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.remove();
  }

  protected listenEvent(): Observable<MouseEvent | boolean> {
    return iif(
      () => this.trigger === OverlayCdkTriggerEnum.Condition,
      this._condition$,
      iif(
        () => this.trigger === OverlayCdkTriggerEnum.Focus,
        fromEvent<MouseEvent>(this.focusElement, this.trigger),
        fromEvent<MouseEvent>(this.queryElement, this.trigger)
      )
    ).pipe(
      tap((event: MouseEvent | boolean) => {
        if (!event) {
          return this.closeMenu();
        }

        if (!this.closeOnClickAgain) {
          return this.showMenu();
        }

        return this.isDestroyed ? this.showMenu() : this.closeMenu();
      })
    );
  }

  protected listenUnEvent(): Observable<MouseEvent> {
    return iif(
      () =>
        this.trigger === OverlayCdkTriggerEnum.Hover ||
        this.trigger === OverlayCdkTriggerEnum.Focus,
      (this.trigger === OverlayCdkTriggerEnum.Hover
          ? fromEvent<MouseEvent>(this.queryElement, 'mouseleave')
          : fromEvent<MouseEvent>(this.focusElement, 'blur')
      ).pipe(
        tap(() => this.closeMenu())
      ),
      EMPTY
    );
  }

  protected listenScroll(): Observable<MouseEvent | undefined> {
    return this.cdk.scroll$.pipe(tap(() => this.updatePosition()));
  }

  protected listenResize(): Observable<MouseEvent | undefined> {
    return this.cdk.resize$.pipe(tap(() => this.updatePosition()));
  }

  protected listenClick(): Observable<MouseEvent | undefined> {
    return this.cdk.click$.pipe(
      tap((event) => {

        if (this.isDestroyed) {
          return;
        }

        if (!event) {
          return;
        }

        if (this.trigger !== OverlayCdkTriggerEnum.Click) {
          return;
        }

        const { target } = event;

        const contains = !this.queryElement.contains(target as HTMLElement)
          && !this.wrapper.contains(target as HTMLElement);
        if (contains) {
          return this.closeMenu();
        }

        if (!this.closeOnClick) {
          return;
        }

        if (this.wrapper.contains(target as HTMLElement)) {
          this.closeMenu();
        }
      })
    );
  }

  protected create(): void {
    if (!this.isDestroyed) {
      return;
    }

    this.componentRef = this.cdk.createComponentRef(PriveOverlayMenuComponent);
    this.componentRef.instance.template = this.template;
    this.componentRef.instance.trigger = this.trigger;
    this.componentRef.instance.position = this.position;
    const menu = this.cdk.getDomElementFromComponentRef(
      this.componentRef
    );
    this.cdk.appendChild(menu);
    const timeout = setTimeout(() => {
      this.setCover();
      this.updatePosition();
      clearTimeout(timeout);
    }, 0);
  }

  protected remove(): void {
    if (this.componentRef) {
      this.cdk.destroyRef(this.componentRef);
    }
  }

  protected showMenu(): void {
    if (this.disabled) {
      return;
    }

    this.create();
    this.menuShowed.emit();
  }

  protected closeMenu(): void {
    this.remove();
    this.menuClosed.emit();
  }

  protected updatePosition(): void {

    if (this.isDestroyed) {
      return;
    }

    this.reset();

    switch (this.position) {
      case OverlayCdkPositionEnum.Top:
        this.calculateTop();
        break;
      case OverlayCdkPositionEnum.TopLeft:
        this.calculateTopLeft();
        break;
      case OverlayCdkPositionEnum.TopRight:
        this.calculateTopRight();
        break;
      case OverlayCdkPositionEnum.Bottom:
        this.calculateBottom();
        break;
      case OverlayCdkPositionEnum.BottomRight:
        this.calculateBottomRight();
        break;
      case OverlayCdkPositionEnum.BottomLeft:
        this.calculateBottomLeft();
        break;
      case OverlayCdkPositionEnum.Left:
        this.calculateLeft();
        break;
      case OverlayCdkPositionEnum.Right:
        this.calculateRight();
        break;
    }

  }

  protected reset(): void {
    this.componentRef.instance.top = '';
    this.componentRef.instance.right = '';
    this.componentRef.instance.bottom = '';
    this.componentRef.instance.left = '';
  }

  protected getData() {
    const { offsetWidth: bodyWidth, offsetHeight: bodyHeight } = this.dom.body.parentElement as HTMLElement;
    const bodyHalfWidth = bodyWidth / 2;

    const wrapper = this.wrapper;
    const { offsetWidth: wrapperWidth, offsetHeight: wrapperHeight } = wrapper;
    const wrapperHalfWidth = wrapperWidth / 2;

    const { offsetWidth: elementWidth, offsetHeight: elementHeight } = this.queryElement;
    const { x, y } = this.queryElement.getBoundingClientRect();

    const nearRight = (x + elementWidth) - bodyHalfWidth > (elementWidth / 2);
    const centerElementPositionX = !nearRight ? (x + (elementWidth / 2)) : (bodyWidth - (x + (elementWidth / 2)));
    const minElementPositionX = !nearRight ? x : (x + elementWidth);

    return {
      bodyWidth,
      bodyHeight,
      bodyHalfWidth,
      wrapper,
      wrapperWidth,
      wrapperHeight,
      wrapperHalfWidth,
      elementWidth,
      elementHeight,
      x,
      y,
      nearRight,
      centerElementPositionX,
      minElementPositionX
    };
  }

  protected calculateTop(): void {
    const { wrapperHeight, wrapperHalfWidth, y, nearRight, centerElementPositionX } = this.getData();

    const top = y - wrapperHeight - this.SPACING;
    const centre = centerElementPositionX - wrapperHalfWidth;
    const canStayTop = top >= 0;
    const canStayCenter = wrapperHalfWidth <= centerElementPositionX;

    if (!canStayTop && !this.fixed) {
      return this.calculateBottom();
    }

    if (!canStayCenter && !this.fixed) {
      return nearRight ? this.calculateTopRight() : this.calculateTopLeft();
    }

    this.componentRef.instance.top = this.getTop(top);
    this.componentRef.instance.position = OverlayCdkPositionEnum.Top;

    if (nearRight) {
      this.componentRef.instance.right = this.getRight(centre);
    } else {
      this.componentRef.instance.left = this.getLeft(centre);
    }

  }

  protected calculateTopLeft(): void {
    const { bodyWidth, wrapperWidth, wrapperHeight, x, y } = this.getData();

    const top = y - wrapperHeight - this.SPACING;
    const left = x;
    const canStayTop = top >= 0;
    const canStayLeft = x + wrapperWidth <= bodyWidth;

    if (!canStayTop && !this.fixed) {
      return this.calculateBottomLeft();
    }

    if (!canStayLeft && !this.fixed) {
      return this.calculateTopRight();
    }

    this.componentRef.instance.position = OverlayCdkPositionEnum.TopLeft;
    this.componentRef.instance.top = this.getTop(top);
    this.componentRef.instance.left = this.getLeft(left);

  }

  protected calculateTopRight(): void {
    const {
      bodyWidth,
      wrapperWidth,
      wrapperHeight,
      elementWidth,
      x,
      y
    } = this.getData();

    const top = y - wrapperHeight - this.SPACING;
    const right = bodyWidth - (x + elementWidth);
    const canStayTop = top >= 0;
    const canStayRight = x + elementWidth >= wrapperWidth;

    if (!canStayTop && !this.fixed) {
      return this.calculateBottomRight();
    }

    if (!canStayRight && !this.fixed) {
      return this.calculateTopLeft();
    }

    this.componentRef.instance.top = this.getTop(top);
    this.componentRef.instance.right = this.getRight(right);
    this.componentRef.instance.position = OverlayCdkPositionEnum.TopRight;
  }

  protected calculateBottom(): void {
    const {
      bodyHeight,
      wrapperHeight,
      wrapperHalfWidth,
      elementHeight,
      y,
      nearRight,
      centerElementPositionX
    } = this.getData();

    const bottom = bodyHeight - (y + elementHeight + this.SPACING + wrapperHeight);
    const top = y + elementHeight + this.SPACING;
    const canStayBottom = bottom >= 0;
    const centre = centerElementPositionX - wrapperHalfWidth;
    const canStayCenter = wrapperHalfWidth <= centerElementPositionX;

    if (!canStayBottom && !this.fixed) {
      return this.calculateTop();
    }

    if (!canStayCenter && !this.fixed) {
      return nearRight ? this.calculateBottomRight() : this.calculateBottomLeft();
    }

    this.componentRef.instance.top = this.getTop(top);
    this.componentRef.instance.position = OverlayCdkPositionEnum.Bottom;

    if (nearRight) {
      this.componentRef.instance.right = this.getRight(centre);
    } else {
      this.componentRef.instance.left = this.getLeft(centre);
    }
  }

  protected calculateBottomLeft(): void {
    const {
      bodyWidth,
      bodyHeight,
      wrapperWidth,
      wrapperHeight,
      elementHeight,
      x,
      y
    } = this.getData();

    const top = y + elementHeight + this.SPACING;
    const bottom = bodyHeight - (top + wrapperHeight);
    const left = x;
    const canStayBottom = bottom >= 0;
    const canStayLeft = x + wrapperWidth <= bodyWidth;

    if (!canStayBottom && !this.fixed) {
      return this.calculateTopLeft();
    }

    if (!canStayLeft && !this.fixed) {
      return this.calculateBottomRight();
    }

    this.componentRef.instance.top = this.getTop(top);
    this.componentRef.instance.left = this.getLeft(left);
    this.componentRef.instance.position = OverlayCdkPositionEnum.BottomLeft;
  }

  protected calculateBottomRight(): void {
    const {
      bodyWidth,
      bodyHeight,
      wrapperWidth,
      wrapperHeight,
      elementWidth,
      elementHeight,
      x,
      y
    } = this.getData();

    const top = y + elementHeight + this.SPACING;
    const bottom = bodyHeight - (top + wrapperHeight);
    const right = bodyWidth - (x + elementWidth);
    const canStayBottom = bottom >= 0;
    const canStayRight = x + elementWidth >= wrapperWidth;

    if (!canStayBottom && !this.fixed) {
      return this.calculateTopRight();
    }

    if (!canStayRight && !this.fixed) {
      return this.calculateBottomLeft();
    }

    this.componentRef.instance.top = this.getTop(top);
    this.componentRef.instance.right = this.getRight(right);
    this.componentRef.instance.position = OverlayCdkPositionEnum.BottomRight;
  }

  protected calculateLeft(): void {
    const {
      wrapperWidth,
      wrapperHeight,
      elementHeight,
      x,
      y
    } = this.getData();
    const top = y + ((elementHeight - wrapperHeight) / 2);
    const left = x - 12 - wrapperWidth;
    const canStayLeft = left >= 0;

    if (!canStayLeft && !this.fixed) {
      this.calculateRight();
    }

    this.componentRef.instance.top = this.getTop(top);
    this.componentRef.instance.left = this.getLeft(left);
    this.componentRef.instance.position = OverlayCdkPositionEnum.Left;
  }

  protected calculateRight(): void {
    const {
      bodyWidth,
      wrapperWidth,
      wrapperHeight,
      elementWidth,
      elementHeight,
      x,
      y
    } = this.getData();

    const top = y + ((elementHeight - wrapperHeight) / 2);
    const right = bodyWidth - (x + 12 + elementWidth + wrapperWidth);
    const canStayRight = right >= 0;

    if (!canStayRight && !this.fixed) {
      this.calculateLeft();
    }

    this.componentRef.instance.top = this.getTop(top);
    this.componentRef.instance.right = this.getRight(right);
    this.componentRef.instance.position = OverlayCdkPositionEnum.Right;
  }

  protected getTop(value: number): string {
    return `${(value + this.offsetTop) * REM}rem`;
  }

  protected getRight(value: number): string {
    return `${(value + this.offsetRight) * REM}rem`;
  }

  protected getLeft(value: number): string {
    return `${(value + this.offsetLeft) * REM}rem`;
  }

  protected getBottom(value: number): string {
    return `${(value + this.offsetBottom) * REM}rem`;
  }

  protected setCover(): void {
    this.wrapper.style.setProperty(
      '--cover',
      `${this.queryElement.offsetWidth * REM}rem`
    );
  }

  @HostListener('window:click', ['$event'])
  public click(event: MouseEvent | Event): void {
    this.cdk.updateClick(event as MouseEvent);
  }
}
