import { TestBed } from '@angular/core/testing';

import { ProgrammeGuard } from './programme.guard';

describe('ProgrammeGuard', () => {
  let guard: ProgrammeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProgrammeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
