import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent implements OnInit {
  @Input() producto: string;
  @Output() onClick = new EventEmitter<any>();
  miProductoServicio: ProductoService;
  constructor(serviceProducto: ProductoService) { 
    this.miProductoServicio = serviceProducto;
  }

  ngOnInit() {
  }

  public onClickButton() {
    this.miProductoServicio.buscar('productos/', this.producto).then(data => {
      console.log(JSON.stringify(data))
    })
  }
}
