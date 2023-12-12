import { TestBed } from '@angular/core/testing';

import { ItNotificationService } from './notification.service';

describe('ItNotificationService', () => {
  let service: ItNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
