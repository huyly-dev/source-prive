import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Input,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import SwiperCore, { EffectCoverflow, Navigation, Pagination, SwiperOptions } from 'swiper';
import { PriveLandingSwiperStore } from '@landing-shared-data-access-store';
import { SwiperComponent } from 'swiper/angular';
import { map } from 'rxjs';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

@Component({
  selector: 'prive-landing-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [PriveLandingSwiperStore]
})
export class PriveLandingSharedUISwiperComponent<T> implements AfterViewInit {

  @Input()
  public set items(items: T[]) {
    this.store.setItems(items);
  }

  @ViewChild('swiper')
  public readonly swiper!: SwiperComponent;

  @ContentChild(TemplateRef)
  public readonly templateRef!: TemplateRef<HTMLElement>;

  public readonly vm$ = this.store.state$;

  public readonly config: SwiperOptions = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    loop: true,
    pagination: true
  };

  constructor(
    protected readonly store: PriveLandingSwiperStore<T>
  ) {}

  public ngAfterViewInit(): void {
    this.store.setCurrentActive(this.swiper?.s_realIndexChange.pipe(map(([{realIndex}]) => realIndex)));
  }
}
