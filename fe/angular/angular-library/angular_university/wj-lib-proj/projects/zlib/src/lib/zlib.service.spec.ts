import { TestBed } from '@angular/core/testing';

import { ZlibService } from './zlib.service';

describe('ZlibService', () => {
  let service: ZlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
