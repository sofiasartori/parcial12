import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Venta } from '../venta';
import { VentasService } from '../ventas.service';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
miVentaServicio: VentasService;
nuevaVenta: Venta;

  constructor(serviceVentas: VentasService, private builder: FormBuilder) {
    this.miVentaServicio = serviceVentas;
   }   

  id = new FormControl('', [
    Validators.required
  ]);
  
  fechaCompra = new FormControl('', [
    Validators.required
  ]);
  
  cantidad = new FormControl('', [
    Validators.required
  ]);


  nuevaForm: FormGroup = this.builder.group({
    id: this.id,
    fechaCompra: this.fechaCompra,
    cantidad: this.cantidad    
  });


  ngOnInit() {
  }

  crearVenta()
  {
    console.log(JSON.stringify(this.nuevaVenta));
    this.miVentaServicio.insertar('ventas/nueva', this.nuevaVenta);
    this.nuevaVenta=null;
  }
  hacerNuevaVenta()
  {
    this.nuevaVenta=new Venta(1, "n","n", "", 0, "n", "", 0);

  }
}
