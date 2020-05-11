import { TestBed } from '@angular/core/testing';

import { PhotoShowService } from './photo-show.service';

describe('PhotoShowService', () => {
  let service: PhotoShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
