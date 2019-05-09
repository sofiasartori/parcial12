import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {

  @Input() producto: number;
  miProductoServicio: ProductoService;

  constructor(serviceProducto: ProductoService) {
    this.miProductoServicio = serviceProducto;
   }

  public onClickButton() {
    this.miProductoServicio.borrar('productos/', this.producto);
  }

  ngOnInit() {
  }

}
