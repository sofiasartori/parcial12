import { MiHttpService } from './mi-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArchivosProductosService {

  api = 'http://localhost:8080/productos/apirest.php/';
  peticion: any;
  constructor( public miHttp: MiHttpService ) {
  }


  public traerProductos(ruta) {
    return this.miHttp.httpGetO(this.api + ruta)
    .toPromise()
    .then( data => {
      console.log('Archivo productos');
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }

  public insertarProductos(ruta, objeto) {
    console.log('objeto:' + JSON.stringify(objeto));
    return this.miHttp.httpPostP2(this.api + ruta, JSON.stringify(objeto));
    
  }

  public borrarProducto(ruta, id) {
    console.log('id:' + id);
    return this.miHttp.httpDelete(this.api + ruta, id);
    
  }

  public buscarProducto(ruta, desc){
    return this.miHttp.httpGetP(this.api + ruta, desc)
    .then( data => {
      console.log('Archivo productos');
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }
}
