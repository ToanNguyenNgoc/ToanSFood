/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoodServiceService } from './food-service.service';

describe('Service: FoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoodServiceService]
    });
  });

  it('should ...', inject([FoodServiceService], (service: FoodServiceService) => {
    expect(service).toBeTruthy();
  }));
});
