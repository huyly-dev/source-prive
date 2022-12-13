import {
  ApplicationRef, ComponentFactoryResolver,
  ComponentRef, EmbeddedViewRef,
  Inject,
  Injectable,
  Injector, PLATFORM_ID,
  Type, ViewContainerRef
} from '@angular/core';
import { OverlayCdkRootComponentStore } from '@data-access-store';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  CDK_PROVIDER_NAME,
  OverlayCdkPositionEnum,
  OverlayCdkPositionModel
} from '@data-access-overlay';
import { PriveOverlayCdkComponent, PriveOverlayCdkNotificationComponent } from '@ui-overlay-cdk';

@Injectable({
  providedIn: 'root'
})
export class CdkService {
  public readonly state$ = this.store.state$;
  public readonly click$ = this.store.click$;
  public readonly resize$ = this.store.resize$;
  public readonly scroll$ = this.store.scroll$;

  public get overlayExisted(): boolean {
    return !!this.getOverlayContainer();
  }

  constructor(
    protected readonly store: OverlayCdkRootComponentStore,
    protected readonly componentFactoryResolver: ComponentFactoryResolver,
    protected readonly applicationRef: ApplicationRef,
    protected readonly injector: Injector,
    @Inject(PLATFORM_ID) protected readonly platformId: string,
    @Inject(DOCUMENT) protected readonly dom: Document
  ) {
  }

  public createComponentRef<TData>(component: Type<TData>): ComponentRef<TData> {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    this.applicationRef.attachView(componentRef.hostView);
    return componentRef;
  }

  public createModalComponentRef<TData>(component: Type<TData>, data?: TData): ComponentRef<TData> {
    const dataInjector = Injector.create({
      providers: [
        {
          provide: CDK_PROVIDER_NAME,
          useValue: data
        }
      ]
    });
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);
    this.applicationRef.attachView(componentRef.hostView);
    return componentRef;
  }

  public getDomElementFromComponentRef<TData>(componentRef: ComponentRef<TData>): HTMLElement {
    return (componentRef.hostView as EmbeddedViewRef<TData>).rootNodes[0];
  }

  public appendChild(child: HTMLElement, parent: HTMLElement = this.dom.body): void {
    if (isPlatformBrowser(this.platformId)) {
      parent.append(child);
    }
  }

  public appendToOverlay(child: HTMLElement): void {
    if (!this.overlayExisted) {
      this.createOverlay();
    }
    this.appendChild(child, this.dom.getElementById('cdk-overlay') as HTMLElement);
  }

  public createOverlay(): void {
    if (!this.overlayExisted) {
      const overlay = this.createComponentRef(PriveOverlayCdkComponent);
      this.appendChild(this.getDomElementFromComponentRef(overlay));
    }
  }

  public appendChildToOverlay(child: HTMLElement): void {
    this.getOverlayContainer().append(child);
  }

  public getOverlayContainer(): HTMLElement {
    return this.dom.getElementById('cdk-overlay') as HTMLElement;
  }

  public showOverlay(): void {
    const container = this.getOverlayContainer();
    container.classList.add('show');
  }

  public hiddenOverlay(): void {
    const container = this.getOverlayContainer();
    container.classList.remove('show');
  }

  public destroyOverlay(): void {
    if (this.overlayExisted) {
      this.dom.removeChild(this.getOverlayContainer().parentElement as HTMLElement);
    }
  }

  public destroyRef<TData>(componentRef: ComponentRef<TData>, delay: number = 0) {
    const timeDestroy = setTimeout(() => {
      this.applicationRef.detachView(componentRef.hostView);
      componentRef.destroy();
      clearTimeout(timeDestroy);
    }, delay);
  }

  public getNotification(position: OverlayCdkPositionModel): HTMLElement {
    return this.dom.getElementById('notification--zone--' + position) as HTMLElement;
  }

  public createNotification(position: OverlayCdkPositionModel): void {
    const isExisted = this.getNotification(position);
    if (!isExisted) {
      const notification = this.createComponentRef(PriveOverlayCdkNotificationComponent);
      notification.instance.position = position;
      const element = this.getDomElementFromComponentRef(notification);
      this.appendChild(element);
    }
  }

  public createAllNotification(): void {
    this.createNotification(OverlayCdkPositionEnum.Top);
    this.createNotification(OverlayCdkPositionEnum.TopRight);
    this.createNotification(OverlayCdkPositionEnum.TopLeft);
    this.createNotification(OverlayCdkPositionEnum.BottomRight);
    this.createNotification(OverlayCdkPositionEnum.Bottom);
    this.createNotification(OverlayCdkPositionEnum.BottomLeft);
    this.createNotification(OverlayCdkPositionEnum.Right);
    this.createNotification(OverlayCdkPositionEnum.Left);
  }

  public showNotification(position: OverlayCdkPositionModel): void {
    const element = this.getNotification(position);
    if (element && !element.classList.contains('show')) {
      element.classList.add('show');
    }
  }

  public hiddenNotification(position: OverlayCdkPositionModel): void {
    const element = this.getNotification(position);
    if (element && element.classList.contains('show')) {
      element.classList.remove('show');
    }
  }

  public updateClick(event: MouseEvent | undefined): void {
    this.store.updateClick(event);
  }

  public updateScroll(event: MouseEvent | undefined): void {
    this.store.updateScroll(event);
  }

  public updateResize(event: MouseEvent | undefined): void {
    this.store.updateResize(event);
  }
}
