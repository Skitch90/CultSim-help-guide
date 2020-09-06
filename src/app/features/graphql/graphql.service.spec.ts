import { TestBed } from '@angular/core/testing';

import { GraphqlService } from './graphql.service';

describe('GraphqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphqlService = TestBed.inject(GraphqlService);
    expect(service).toBeTruthy();
  });
});
