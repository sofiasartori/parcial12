import { ArchivosProductosService } from './archivos-productos.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(public miHttp: ArchivosProductosService) {

  }

  filtrado: any;

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerProductos('productos/').then(data => {
      console.log('produtcos service', data);
      return data;
    });

  }
}
