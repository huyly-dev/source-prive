import { AfterViewInit, Directive, ElementRef, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[priveCommonTabMore]'
})
export class PriveCommonTabMoreDirective implements AfterViewInit {

  @Input('priveCommonTabMore')
  public set selected(value: string | undefined) {
    this._selected = value;
    if (this.el.nativeElement) {
      this.calculate();
    }
  }

  protected _selected: string | undefined;

  constructor(
    protected readonly el: ElementRef<HTMLDivElement>,
    @Inject(PLATFORM_ID)
    protected readonly platFormId: string
  ) { }

  public ngAfterViewInit(): void {
    this.calculate(2000);
  }

  public calculate(debounce = 0): void {
    if (isPlatformBrowser(this.platFormId)) {
      const timeout = setTimeout(() => {
        const element = this.el.nativeElement;
        const { scrollWidth, offsetWidth } = element.querySelector('div.wrapper--common--tabset--navigation') as HTMLDivElement;
        const active = document.getElementById(this._selected || '') as HTMLButtonElement;
        const more = element.querySelector('button.wrapper--common--tabset--more') as HTMLDivElement;
        const shadowLeft = element.querySelector('div.wrapper--common--tabset--shadow.position-left') as HTMLDivElement;
        const shadowRight = element.querySelector('div.wrapper--common--tabset--shadow.position-right') as HTMLDivElement;
        if (scrollWidth > offsetWidth) {
          more.classList.add('show');
          active.scrollIntoView({ inline: 'center', block: 'nearest' });
          const timeoutScroll = setTimeout(() => {
            this.scroll();
            clearTimeout(timeoutScroll);
          }, 100);
        } else {
          more.classList.remove('show');
          shadowLeft.classList.remove('show');
          shadowRight.classList.remove('show');
        }
        clearTimeout(timeout);
      }, debounce);
    }
  }

  public scroll(): void {
    this.scrollLeft();
    this.scrollRight();
  }

  protected scrollLeft(): void {
    const element = this.el.nativeElement;
    const { scrollLeft } = element.querySelector('div.wrapper--common--tabset--navigation') as HTMLDivElement;
    const shadowLeft = element.querySelector('div.wrapper--common--tabset--shadow.position-left') as HTMLDivElement;
    if (scrollLeft > 0) {
      shadowLeft.classList.add('show');
    } else {
      shadowLeft.classList.remove('show');
    }
  }

  protected scrollRight(): void {
    const element = this.el.nativeElement;
    const {
      scrollWidth,
      scrollLeft,
      offsetWidth
    } = element.querySelector('div.wrapper--common--tabset--navigation') as HTMLDivElement;
    const shadowRight = element.querySelector('div.wrapper--common--tabset--shadow.position-right') as HTMLDivElement;
    if (parseInt((scrollLeft + offsetWidth).toFixed(0), 0) < scrollWidth) {
      shadowRight.classList.add('show');
    } else {
      shadowRight.classList.remove('show');
    }
  }
}
