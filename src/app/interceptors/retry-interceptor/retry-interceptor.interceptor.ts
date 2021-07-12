import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class RetryInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(retry(2));
  }
}
