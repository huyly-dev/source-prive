import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  LandingOtcWhyTradingComponentStore,
  PriveLandingOtcWhyTradingRatio
} from '@landing-otc-shared-data-access-store';
import { expandTitle, fadeDescription, scaleImage } from '@landing-otc-shared-utils-animations';
import { debounceTime, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';
import { CommonScreenSize } from '@data-access-common';

@Component({
  selector: 'prive-landing-otc-why-trading',
  templateUrl: './why-trading.component.html',
  styleUrls: ['./why-trading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [scaleImage, expandTitle, fadeDescription],
  providers: [LandingOtcWhyTradingComponentStore]
})
export class PriveLandingOtcShellUIWhyTradingComponent implements OnInit {
  @ViewChild('whyTradingRef', {static: true}) public whyTradingRef: ElementRef | null = null;

  public readonly vm$ = this.store.vm$;

  constructor(
      protected readonly store: LandingOtcWhyTradingComponentStore,
  ) {}

  public ngOnInit(): void {
    this.store.setIsLgScreen(fromEvent(window, 'resize')
        .pipe(
            startWith(this.whyTradingRef?.nativeElement.offsetWidth),
            debounceTime(250),
            map(() => {
              const offsetWidth = this.whyTradingRef?.nativeElement.offsetWidth;
              let ratio: PriveLandingOtcWhyTradingRatio
              if (offsetWidth >= CommonScreenSize.XL) {
                ratio = {
                  xAxis: 3.125,
                  yAxis: 3.125,
                  scaleUpRatio: 1.8,
                  scaleDownRatio: 1
                }
              } else {
                ratio = {
                  xAxis: 2.5,
                  yAxis: 2.5,
                  scaleUpRatio: 1.4,
                  scaleDownRatio: 0.6,
                }
              }

              return {
                isLgScreen: this.whyTradingRef?.nativeElement.offsetWidth >= CommonScreenSize.LG,
                ratio
              }
            }),
            distinctUntilChanged()
        ));
  }

  public toggleScaleImg(index: number): void {
    this.store.setReasonState(index);
  }
}
