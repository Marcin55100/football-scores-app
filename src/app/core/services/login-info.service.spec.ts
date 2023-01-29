/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginInfoService } from './login-info.service';

describe('Service: LoginInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginInfoService]
    });
  });

  it('should ...', inject([LoginInfoService], (service: LoginInfoService) => {
    expect(service).toBeTruthy();
  }));
});
