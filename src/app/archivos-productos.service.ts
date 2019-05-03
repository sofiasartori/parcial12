import { MiHttpService } from './mi-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArchivosProductosService {

  api = 'http://localhost/productos/apirest.php/';
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
}
