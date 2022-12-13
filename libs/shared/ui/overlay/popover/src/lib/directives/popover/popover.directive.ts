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
  Renderer2,
  TemplateRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject, combineLatest, EMPTY, fromEvent, iif, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { autoDestroy, followDestroy } from '@utils-observable';
import {
  OverlayCdkPositionEnum,
  OverlayCdkPositionModel,
  OverlayCdkTriggerEnum,
  OverlayCdkTriggerModel,
  OverlayPopoverSizeEnum,
  OverlayPopoverSizeModel,
  OverlayPopoverStatusEnum,
  OverlayPopoverStatusModel,
  REM
} from '@data-access-overlay';
import { CdkService } from '@data-access-service';
import { PriveOverlayPopoverComponent } from '../../components';

@Directive({
  selector: '[priveOverlayPopover]',
  exportAs: 'priveOverlayPopover'
})
@autoDestroy()
export class PriveOverlayPopoverDirective implements OnDestroy, AfterViewInit {

  @Output()
  public readonly popoverClosed: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Output()
  public readonly popoverShowed: EventEmitter<unknown> = new EventEmitter<unknown>();

  @Input('priveOverlayPopover')
  public template!: TemplateRef<HTMLElement>;

  @Optional()
  @Input('priveOverlayPopoverQueryItem')
  public queryItem!: string;

  @Optional()
  @Input('priveOverlayPopoverQueryFocusItem')
  public queryFocusItem!: string;

  @Input('priveOverlayPopoverStatus')
  public status: OverlayPopoverStatusModel = OverlayPopoverStatusEnum.Information;

  @Input('priveOverlayPopoverPosition')
  public position: OverlayCdkPositionModel = OverlayCdkPositionEnum.Top;

  @Input('priveOverlayPopoverTrigger')
  public trigger: OverlayCdkTriggerModel = OverlayCdkTriggerEnum.Hover;

  @Input('priveOverlayPopoverSize')
  public size: OverlayPopoverSizeModel = OverlayPopoverSizeEnum.Default;

  @Input('priveOverlayPopoverOffsetLeft')
  public offsetLeft = 0;

  @Input('priveOverlayPopoverOffsetRight')
  public offsetRight = 0;

  @Input('priveOverlayPopoverOffsetTop')
  public offsetTop = 0;

  @Input('priveOverlayPopoverOffsetBottom')
  public offsetBottom = 0;

  @Input('priveOverlayPopoverFixed')
  public fixed = false;

  @Input('priveOverlayPopoverDisabled')
  public disabled = false;

  @Optional()
  @Input('priveOverlayPopoverCondition')
  set condition(value: boolean) {
    this.condition$.next(value);
  }

  public componentRef!: ComponentRef<PriveOverlayPopoverComponent>;

  protected condition$ = new BehaviorSubject(false);

  protected readonly SPACING = 12;

  protected get isDestroyed(): boolean {
    if (!this.componentRef) {
      return true;
    }

    return this.componentRef.hostView.destroyed;
  }

  protected get wrapper(): HTMLElement {
    const element = this.cdk.getDomElementFromComponentRef(this.componentRef);
    return element.childNodes.item(0) as HTMLElement;
  }

  protected get queryElement(): HTMLElement {
    return this.queryItem ? this.element.nativeElement.querySelector(this.queryItem) as HTMLElement : this.element.nativeElement;
  }

  protected get focusElement(): HTMLElement {
    const focusElement = this.queryFocusItem ? this.queryElement.querySelector(this.queryFocusItem) : this.queryElement;
    return focusElement as HTMLElement;
  }

  constructor(
    @Inject(DOCUMENT) protected readonly dom: Document,
    protected readonly renderer: Renderer2,
    protected readonly element: ElementRef<HTMLElement>,
    @Optional() protected readonly cdk: CdkService
  ) { }

  public ngAfterViewInit(): void {
    combineLatest([
      this.listenEvent(),
      this.listenUnEvent(),
      this.listenScroll(),
      this.listenClick(),
      this.listenResize()
    ]).pipe(
      followDestroy(this)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.remove();
  }

  protected listenEvent(): Observable<MouseEvent | boolean> {
    return iif(
      () => this.trigger === OverlayCdkTriggerEnum.Condition,
      this.condition$,
      iif(
        () => this.trigger === OverlayCdkTriggerEnum.Focus,
        fromEvent<MouseEvent>(this.focusElement, this.trigger),
        fromEvent<MouseEvent>(this.queryElement, this.trigger)
      )
    )
      .pipe(
        tap((event: MouseEvent | boolean) => {
          if (event) {
            this.showPopover();
          } else {
            this.closePopover();
          }
        })
      );
  }

  protected listenUnEvent(): Observable<MouseEvent> {
    return iif(
      () => this.trigger === OverlayCdkTriggerEnum.Hover || this.trigger === OverlayCdkTriggerEnum.Focus,
      (
        this.trigger === OverlayCdkTriggerEnum.Hover
          ? fromEvent<MouseEvent>(this.queryElement, 'mouseleave')
          : fromEvent<MouseEvent>(this.focusElement, 'blur')
      )
        .pipe(
          tap(() => this.closePopover())
        ),
      EMPTY
    );
  }

  protected listenScroll(): Observable<MouseEvent | undefined> {
    return this.cdk.scroll$
      .pipe(
        tap(() => this.updatePosition())
      );
  }

  protected listenResize(): Observable<MouseEvent | undefined> {
    return this.cdk.resize$
      .pipe(
        tap(() => this.updatePosition())
      );
  }

  protected listenClick(): Observable<MouseEvent | undefined> {
    return this.cdk.click$
      .pipe(
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
          if (!this.queryElement.contains(target as HTMLElement) && !this.wrapper.contains(target as HTMLElement)) {
            this.closePopover();
          }
        })
      );
  }

  protected create(): void {
    if (!this.isDestroyed) {
      return;
    }

    this.componentRef = this.cdk.createComponentRef(PriveOverlayPopoverComponent);
    this.componentRef.instance.template = this.template;
    this.componentRef.instance.trigger = this.trigger;
    this.componentRef.instance.position = this.position;
    this.componentRef.instance.status = this.status;
    this.componentRef.instance.size = this.size;
    const popover = this.cdk.getDomElementFromComponentRef(this.componentRef);
    this.cdk.appendChild(popover);
    const timeout = setTimeout(() => {
      if (this.size === OverlayPopoverSizeEnum.Cover) {
        this.setCover();
      }
      this.updatePosition();
      clearTimeout(timeout);
    }, 0);
  }

  protected remove(): void {
    if (this.componentRef) {
      this.cdk.destroyRef(this.componentRef);
    }
  }

  protected showPopover(): void {
    if (this.disabled) {
      return;
    }

    this.create();
    this.popoverShowed.emit();
  }

  protected closePopover(): void {
    this.remove();
    this.popoverClosed.emit();
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
    this.wrapper.style.setProperty('--cover', `${this.queryElement.offsetWidth * REM}rem`);
  }

  @HostListener('window:click', ['$event'])
  public click(event: MouseEvent | Event): void {
    this.cdk.updateClick(event as MouseEvent);
  }
}
