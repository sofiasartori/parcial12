import { ProductoSeleccionadoComponent } from './producto-seleccionado.component';
import { ProductoService } from './producto.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'parcial';
  listado: any;
  miProductoServicio: ProductoService;

  constructor(serviceProducto: ProductoService) {
    this.miProductoServicio = serviceProducto;


  }
  ngOnInit() {
    this.TraerTodos();
  }
  TraerTodos() {
    this.miProductoServicio.traertodos('productos/', '').then(data => {
      this.listado = data
      console.log(data)
    })
  }
}
