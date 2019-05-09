import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Venta } from '../venta';
import { ProductoService } from '../producto.service';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  
miProductoServicio: ProductoService;

nuevaVenta: Venta;
  constructor(serviceProducto: ProductoService, private builder: FormBuilder) {
    this.miProductoServicio = serviceProducto;
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


  altaForm: FormGroup = this.builder.group({
    id: this.id,
    fechaCompra: this.fechaCompra,
    cantidad: this.cantidad    
  });


  ngOnInit() {
  }

  crearVenta()
  {
    //hacer cosas
    let id:number =Math.floor((Math.random() * 1000) + 1);
    this.nuevaVenta.id=id;
    
    
    this.miProductoServicio.insertar('ventas/nueva', this.nuevaVenta);
    this.nuevaVenta=null;
  }
  hacerNuevaVenta()
  {
    this.nuevaVenta=new Venta(1, "n","n", "", 0, "n", "", 0);

  }
}
