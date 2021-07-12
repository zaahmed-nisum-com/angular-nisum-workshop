import { TestBed } from '@angular/core/testing';

import { RetryInterceptorInterceptor } from './retry-interceptor.interceptor';

describe('RetryInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RetryInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RetryInterceptorInterceptor = TestBed.inject(RetryInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
