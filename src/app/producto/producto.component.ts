import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
@Output() SeCreoUnProducto: EventEmitter<any>= new EventEmitter<any>();
miProductoServicio: ProductoService;

nuevoProducto: Producto;
  constructor(serviceProducto: ProductoService, private builder: FormBuilder) {
    this.miProductoServicio = serviceProducto;
   }   

  descripcion = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  
  tipo = new FormControl('', [
    Validators.required
  ]);


  fecha = new FormControl('', [
    Validators.required
  ]);
  
  precio = new FormControl('', [
    Validators.required
  ]);


  altaForm: FormGroup = this.builder.group({
    descripcion: this.descripcion,
    tipo: this.tipo,
    fecha: this.fecha,
    precio: this.precio    
  });


  ngOnInit() {
  }

  crearProducto()
  {
    //hacer cosas
    let id:number =Math.floor((Math.random() * 1000) + 1);
    this.nuevoProducto.id=id;
    this.SeCreoUnProducto.emit(this.nuevoProducto);
    
    this.miProductoServicio.insertar('productos/alta', this.nuevoProducto);
    this.nuevoProducto=null;
  }
  hacerNuevoProducto()
  {
    this.nuevoProducto=new Producto(0, "","", "", 0, "");

  }

}
