/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ErrorsFormsService } from './errors-forms.service';

describe('Service: ErrorsForms', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorsFormsService]
    });
  });

  it('should ...', inject([ErrorsFormsService], (service: ErrorsFormsService) => {
    expect(service).toBeTruthy();
  }));
});
