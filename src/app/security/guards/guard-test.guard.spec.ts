import { TestBed } from '@angular/core/testing';

import { GuardTestGuard } from './guard-test.guard';

xdescribe('GuardTestGuard', () => {
  let guard: GuardTestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardTestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
