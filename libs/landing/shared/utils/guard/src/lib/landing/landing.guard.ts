import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PriveLandingGuard implements CanLoad {

  public static readonly COOKIE_SIGN_IN_FLAG = 'signed_in';

  constructor(
    protected readonly cookie: CookieService,
    @Inject(PLATFORM_ID)
    protected readonly platFormId: string
  ) {
  }

  public canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (isPlatformBrowser(this.platFormId)) {
      const flag = this.cookie.get(PriveLandingGuard.COOKIE_SIGN_IN_FLAG);
      if (flag != null) {
        if (flag === 'true') {
          document.location.href = '/home';
          return false;
        }
        return true;
      }
      return true;
    }
    return true;
  }

}
