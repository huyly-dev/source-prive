import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpStatusCode
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalService } from '@data-access-service';

@Injectable()
export class PriveMainInterceptor implements HttpInterceptor {

  constructor(
    protected readonly router: Router,
    protected readonly modal: ModalService
  ) { }

  public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      withCredentials: true
    });
    return next.handle(request)
      .pipe(
        catchError((e: HttpErrorResponse) => {
          if (e.status === HttpStatusCode.Unauthorized) {
            this.router.navigate(['login']);
            this.modal.close();
          }

          return throwError(() => e);
        })
      );
  }

}
