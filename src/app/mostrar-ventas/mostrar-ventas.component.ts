import { Component, OnInit } from '@angular/core';
import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-mostrar-ventas',
  templateUrl: './mostrar-ventas.component.html',
  styleUrls: ['./mostrar-ventas.component.css']
})
export class MostrarVentasComponent implements OnInit {

  listado: any;
  miVentaServicio: VentasService;

  constructor(serviceVenta: VentasService) {
    this.miVentaServicio = serviceVenta;


  }
  ngOnInit() {
    this.TraerTodos();
  }
  TraerTodos() {
    this.miVentaServicio.traertodos('ventas/listado', '').then(data => {
      this.listado = data
      console.log(data)
    })
  }
}
