import { TestBed } from '@angular/core/testing';

import { SingleSpaCommunicationService } from './single-spa-communication.service';

describe('SingleSpaCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleSpaCommunicationService = TestBed.get(SingleSpaCommunicationService);
    expect(service).toBeTruthy();
  });
});
