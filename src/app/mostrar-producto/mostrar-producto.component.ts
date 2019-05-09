import { Component, OnInit } from '@angular/core';
import { BuscarProductoComponent } from '../buscar-producto/buscar-producto.component';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
  buscarProd: BuscarProductoComponent;
  constructor() { }

  ngOnInit() {
  }

}
