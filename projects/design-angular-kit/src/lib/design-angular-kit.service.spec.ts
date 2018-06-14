import { TestBed, inject } from '@angular/core/testing';

import { DesignAngularKitService } from './design-angular-kit.service';

describe('DesignAngularKitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DesignAngularKitService]
    });
  });

  it('should be created', inject([DesignAngularKitService], (service: DesignAngularKitService) => {
    expect(service).toBeTruthy();
  }));
});
