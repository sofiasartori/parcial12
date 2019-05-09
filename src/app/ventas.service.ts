import { ArchivosVentasService } from './archivos-ventas.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(public miHttp: ArchivosVentasService) {

  }

  filtrado: any;

  traertodos(ruta: string, filtro: string) {
    return this.miHttp.traerVentas('ventas/listado').then(data => {
      console.log('productos service', data);
      return data;
    });
 }
 insertar(ruta: string, venta: any){
  return this.miHttp.insertarVenta('ventas/nueva', venta);
 }
}