import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, tap, catchError, finalize } from 'rxjs/operators';
import { TokenValidaterService } from './token-validater.service';
import { BusyIndicatorService } from './busy-indicator.service';
import { AuthService } from 'src/app/auth/service/auth.service';
import { CommonService } from './common.service';
import { NotificationsService } from 'angular9-notifications';

const errMsg = '';
@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService implements HttpInterceptor {
  token: any;
  accessToken: any;
  req: any;
  constructor(
    private tokenService: TokenValidaterService,
    private busyIndicator: BusyIndicatorService,
    private authService: AuthService,
    private commonService: CommonService,
    private notify: NotificationsService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showLoader();
    if (this.commonService.getToken) {
      if (this.tokenService.validateToken(this.commonService.getToken)) {
        this.authService.signOut();
      } else {
        this.token = this.commonService.getToken;
      }
    } else {
      this.token = this.tokenService.defaultToken();
    }
    this.req = request.clone({
        url: `${environment.baseUri}${request.url}`,
        setHeaders: { Authorization: `Bearer ${this.token}` }
      });
    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'multipart/form-data') });
    }
    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    return next.handle(this.req)
      .pipe(
        tap(evt => {
          if (evt instanceof HttpResponse) {
            if (evt.body) {
              this.customException(evt);
            }
          }
        }),
        catchError((error: HttpErrorResponse) => {
          // Client Side Error
          if (error.error instanceof ErrorEvent) {
            this.customException(error);
          } else {  // Server Side Error
            this.customException(error);
          }
          return throwError(errMsg);
        }),
        finalize(() => this.hideLoader())
      );
  }

  private customException(resp): any {
    switch (resp.status) {
      case 0:
        this.notify.error('', 'Application is busy, please try after few minutes!');
        break;
      case 500:
        this.notify.error('', resp.error.message);
        break;
      case 401:
        this.notify.error('', resp.error.message);
        break;
      case (resp.status > 200 && resp.status <= 299):
        this.notify.success('', resp.body.message);
        break;
      case 201:
        this.notify.success('', resp.body.message);
        break;
      default:
        break;
    }
  }

  private showLoader(): void {
    this.busyIndicator.setStatus(true);
  }
  private hideLoader(): void {
    this.busyIndicator.setStatus(false);
  }
}
