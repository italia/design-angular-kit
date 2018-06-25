import { TestBed, inject } from '@angular/core/testing';

import { TableOfContentService } from './table-of-content.service';

describe('TableOfContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableOfContentService]
    });
  });

  it('should be created', inject([TableOfContentService], (service: TableOfContentService) => {
    expect(service).toBeTruthy();
  }));
});
