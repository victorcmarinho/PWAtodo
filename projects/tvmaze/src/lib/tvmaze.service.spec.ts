import { TestBed } from '@angular/core/testing';

import { TvmazeService } from './tvmaze.service';

describe('TvmazeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TvmazeService = TestBed.get(TvmazeService);
    expect(service).toBeTruthy();
  });
});
