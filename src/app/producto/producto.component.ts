import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
@Output() SeCreoUnProducto: EventEmitter<any>= new EventEmitter<any>();
miProductoServicio: ProductoService;

nuevoProducto: Producto;
  constructor(serviceProducto: ProductoService) {
    this.miProductoServicio = serviceProducto;
   }

  ngOnInit() {
  }

  crearProducto()
  {
    //hacer cosas
    let id:number =Math.floor((Math.random() * 1000) + 1);
    this.nuevoProducto.id=id;
    this.SeCreoUnProducto.emit(this.nuevoProducto);
    
    this.miProductoServicio.insertar('productos/', this.nuevoProducto);
    this.nuevoProducto=null;
  }
  hacerNuevoProducto()
  {
    this.nuevoProducto=new Producto(1, "n","n", "", 0, "n");

  }

}
