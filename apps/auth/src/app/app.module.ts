import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './containers';
import { PriveOverlayCdkModule } from '@ui-overlay-cdk';
// import { PriveAuthInterceptor, PriveAuthShellMainModule } from '@auth';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}

const MODULES = [
  BrowserModule,
  HttpClientModule,
  PriveOverlayCdkModule,
  // PriveAuthShellMainModule,
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
    }
  }),
];

@NgModule({
  declarations: [AppComponent],
  imports: [...MODULES],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: PriveAuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
