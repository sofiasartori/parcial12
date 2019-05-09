import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductoService } from '../producto.service';
import { MostrarProductoComponent } from '../mostrar-producto/mostrar-producto.component';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {
  producto: string = '';
  @Output() buscar = new EventEmitter<any>();
  miProductoServicio: ProductoService;
  mostrarProducto: MostrarProductoComponent;
  constructor(serviceProducto: ProductoService) { 
    this.miProductoServicio = serviceProducto;
  }

  ngOnInit() {
  }

  public onClickButton() {
    console.log("producto: " + this.producto);
    this.miProductoServicio.buscar('productos/', this.producto).then(data => {
      if(data == 500){
        console.log('nada');
        this.buscar.emit(null);
      }
      else{
        console.log(data);
        this.buscar.emit(data);
      }        
    })
  }
}
