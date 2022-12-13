import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  ImgSize,
  LandingCarouselSliderComponentStore,
  LandingCarouselSliderItem
} from '@landing-shared-data-access-store';
import { expand, expandWidth, fadeInOut, fadeInOutDescription } from '@landing-shared-utils-animations';
import { debounceTime, filter, fromEvent, map, pairwise, startWith, Subject } from 'rxjs';
import { CommonScreenSize } from '@data-access-common';

@Component({
  selector: 'prive-landing-carousel-slider',
  templateUrl: './carousel-slider.component.html',
  styleUrls: ['./carousel-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LandingCarouselSliderComponentStore],
  animations: [fadeInOut, expand, fadeInOutDescription, expandWidth]
})
export class PriveLandingSharedUICarouselSliderComponent implements OnInit {

  @Input()
  public set images(items: LandingCarouselSliderItem[]) {
    this.store.setItems(items);
    this.lengthImages = items.length;
  }

  @ViewChild('container', {static: true}) public containerRef: ElementRef | null = null;

  public mouseEnter$ = new Subject<number>();
  public readonly vm$ = this.store.vm$;
  public lengthImages = 0;

  constructor(
      protected readonly store: LandingCarouselSliderComponentStore
  ) { }

  public ngOnInit(): void {

    this.store.setCurrentActive(this.mouseEnter$
        .pipe(
            startWith(Math.floor(this.lengthImages / 2)),
            debounceTime(200),
            pairwise()
        )
    );

    this.store.setImgSize(fromEvent(window, 'resize')
        .pipe(
            startWith(this.containerRef?.nativeElement.offsetWidth),
            filter(() => this.containerRef?.nativeElement.offsetWidth >= CommonScreenSize.LG),
            debounceTime(250),
            map(() => this.calculateImgSize(this.containerRef?.nativeElement.offsetWidth, this.lengthImages))
        ))
  }

  public mouseEnter(event: number): void {
    this.mouseEnter$.next(event);
  };

  public mouseLeave(event: number): void {
    this.mouseEnter$.next(event);
  }

  public getBgUrl(url: string): string {
    return `url("${url}")`;
  }

  private calculateImgSize(offsetWidth: number, lengthImgList: number): ImgSize {
    const isXLScreen = offsetWidth >= CommonScreenSize.XL;
    const gapX = 16;
    const paddingX = 80
    const imgExpandWidth = isXLScreen ? 460 : 328;
    const imgExpandHeight = isXLScreen ? 353 : 300;
    const imgCollapseWidth = (offsetWidth - ((gapX * (lengthImgList - 1)) + paddingX + imgExpandWidth)) / (lengthImgList - 1);
    const imgCollapseHeight = isXLScreen ? 460 : 392;

    return {
      imgExpandWidth,
      imgExpandHeight,
      imgCollapseWidth,
      imgCollapseHeight,
    }
  }
}
