import { TestBed } from '@angular/core/testing';

import { DuckartService } from './duckart.service';

describe('DuckartService', () => {
  let service: DuckartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuckartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
