import { TestBed } from '@angular/core/testing';

import { BoardItemInitiatorService } from './board-item-initiator.service';

describe('BoardItemInitiatorService', () => {
  let service: BoardItemInitiatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardItemInitiatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
