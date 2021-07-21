/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartCommonService } from './cart-common.service';

describe('Service: CartCommon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartCommonService]
    });
  });

  it('should ...', inject([CartCommonService], (service: CartCommonService) => {
    expect(service).toBeTruthy();
  }));
});
