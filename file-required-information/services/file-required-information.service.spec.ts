import { TestBed } from '@angular/core/testing';

import { FileRequiredInformationService } from './file-required-information.service';

describe('FileRequiredInformationService', () => {
  let service: FileRequiredInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileRequiredInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
