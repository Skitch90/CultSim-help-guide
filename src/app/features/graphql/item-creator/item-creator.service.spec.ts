import { TestBed } from '@angular/core/testing';

import { ItemCreatorService } from './item-creator.service';

describe('ItemCreatorService', () => {
  let service: ItemCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
