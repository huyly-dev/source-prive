import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './containers';
import { PriveMainInterceptor } from '@main-shared-utils-interceptor';
import { PriveMainShellMainModule } from '@main-shell-main';
import { HIGHLIGHT_OPTIONS, HighlightModule, HighlightOptions } from 'ngx-highlightjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '../prive-assets/i18n/', '.json');
}

const MODULES = [
  BrowserAnimationsModule,
  BrowserModule,
  HttpClientModule,
  PriveMainShellMainModule,
  HighlightModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  })
];

const PROVIDERS = [
  {
    provide: HIGHLIGHT_OPTIONS,
    useValue: <HighlightOptions>{
      lineNumbers: true,
      fullLibraryLoader: () => import('highlight.js')
    }
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: PriveMainInterceptor,
    multi: true
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES],
  providers: [
    ...PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
