import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { LocalstorageService } from 'src/app/localstorage/localstorage.service';


@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalstorageService) { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorizedToken = this.localStorageService.getItem('auth')
    return next.handle(httpRequest.clone({ setHeaders: { authorized: authorizedToken.authToken } }));
  }
}
