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
      console.log('productos service', data);
      return data;
    });
 }
 insertar(ruta: string, producto: any){
  return this.miHttp.insertarProductos('productos/alta', producto);
 }

 borrar(ruta: string, id: number){
  return this.miHttp.borrarProducto('productos/', id);
 }

 buscar(ruta: string, desc: string){
   return this.miHttp.buscarProducto('productos/', desc);
 }
}
