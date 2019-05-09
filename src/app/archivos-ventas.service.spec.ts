import { TestBed } from '@angular/core/testing';

import { ArchivosVentasService } from './archivos-ventas.service';

describe('ArchivosVentasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArchivosVentasService = TestBed.get(ArchivosVentasService);
    expect(service).toBeTruthy();
  });
});
