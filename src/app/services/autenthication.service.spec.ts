import { TestBed } from '@angular/core/testing';

import { AutenthicationService } from './autenthication.service';

describe('AutenthicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenthicationService = TestBed.get(AutenthicationService);
    expect(service).toBeTruthy();
  });
});
