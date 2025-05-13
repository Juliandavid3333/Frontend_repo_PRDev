import { TestBed } from '@angular/core/testing';

import { GiphycatService } from './giphycat.service';

describe('GiphycatService', () => {
  let service: GiphycatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphycatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
