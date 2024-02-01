import { TestBed } from '@angular/core/testing';

import { ChildAppService } from './child-app.service';

describe('ChildAppService', () => {
  let service: ChildAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChildAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
