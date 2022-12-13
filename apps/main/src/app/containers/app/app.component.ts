import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CdkService } from '@data-access-service';

@Component({
  selector: 'prive-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('root')
  public root!: ElementRef<HTMLDivElement>;

  constructor(
    protected readonly translateService: TranslateService,
    protected readonly cdk: CdkService,
    protected readonly renderer: Renderer2
  ) { }

  public ngOnInit(): void {
    this.setDefaultLang();
  }

  public ngAfterViewInit(): void {
    const zoom = window.innerWidth / 1440;
    this.renderer.setStyle(this.root.nativeElement, '--zoom', zoom);
    this.cdk.createOverlay();
  }

  protected setDefaultLang(): void {
    // if (['en', 'vi'].indexOf(this.translateService.getBrowserLang()) > -1) {
    //   this.translateService.setDefaultLang(this.translateService.getBrowserLang());
    // } else {
    //   this.translateService.setDefaultLang('en');
    // }
    this.translateService.setDefaultLang('en');
  }

  @HostListener('window:resize', ['$event'])
  public resize(event: MouseEvent | Event): void {
    this.cdk.updateResize(event as MouseEvent);
  }

  @HostListener('window:scroll', ['$event'])
  public scroll(event: MouseEvent | Event): void {
    this.cdk.updateScroll(event as MouseEvent);
  }

  @HostListener('window:click', ['$event'])
  public click(event: MouseEvent | Event): void {
    this.cdk.updateClick(event as MouseEvent);
  }
}
