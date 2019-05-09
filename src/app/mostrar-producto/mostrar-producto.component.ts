import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { BuscarProductoComponent } from '../buscar-producto/buscar-producto.component';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
  buscarProd: BuscarProductoComponent;
  @Input() productoBuscado :any;
  constructor() { 
    this.ngOnInit();
  }

  ngOnInit() {
    console.log("prodB: " + this.productoBuscado);
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log('productoBuscado: ' , this.productoBuscado)
    }

}
