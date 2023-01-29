import { TestBed } from '@angular/core/testing';

import { EmailValidtorService } from './email-validtor.service';

describe('EmailValidtorService', () => {
  let service: EmailValidtorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailValidtorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
