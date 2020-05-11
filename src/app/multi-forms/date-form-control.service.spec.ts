import { TestBed } from '@angular/core/testing';

import { DateFormControlService } from './date-form-control.service';

describe('DateFormControlService', () => {
  let service: DateFormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateFormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
