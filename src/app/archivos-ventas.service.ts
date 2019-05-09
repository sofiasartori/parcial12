import { MiHttpService } from './mi-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ArchivosVentasService {

  api = 'http://localhost/productos/apirest.php/';
  peticion: any;
  constructor( public miHttp: MiHttpService ) {
  }


  public traerVentas(ruta) {
    return this.miHttp.httpGetO(this.api + ruta)
    .toPromise()
    .then( data => {
      console.log('Archivo Ventas');
     // console.log( data );
      return data;
    }, err => {
      console.log( err );
    })
  }

  public insertarVenta(ruta, objeto) {
    console.log('objeto:' + JSON.stringify(objeto));
    return this.miHttp.httpPostP2(this.api + ruta, JSON.stringify(objeto));
    
  }
}
