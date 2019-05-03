import { TestBed } from '@angular/core/testing';

import { ArchivosProductosService } from './archivos-productos.service';

describe('ArchivosProductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosProductosService = TestBed.get(ArchivosProductosService);
    expect(service).toBeTruthy();
  });
});
