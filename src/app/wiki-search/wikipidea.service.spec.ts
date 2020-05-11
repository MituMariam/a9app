import { TestBed } from '@angular/core/testing';

import { WikipideaService } from './wikipidea.service';

describe('WikipideaService', () => {
  let service: WikipideaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikipideaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
