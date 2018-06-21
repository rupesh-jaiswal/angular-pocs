import { TestBed, inject } from '@angular/core/testing';

import { Poc3Service } from './poc3.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('Poc3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Poc3Service, HttpClient],
      imports: [ HttpClientModule]

    });
  });

  it('should be created', inject([Poc3Service], (service: Poc3Service) => {
    expect(service).toBeTruthy();
  }));
});
