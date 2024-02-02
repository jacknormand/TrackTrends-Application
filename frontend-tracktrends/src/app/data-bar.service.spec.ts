import { TestBed } from '@angular/core/testing';

import { DataBarService } from './data-bar.service';

describe('DataBarService', () => {
  let service: DataBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
