import { AppComponent } from './app.component';
import { Component, OnInit, Input } from '@angular/core';
import { Producto } from './producto';


@Component({
  selector: 'app-producto-seleccionado',
  templateUrl: './producto-seleccionado.component.html',
  styleUrls: ['./producto-seleccionado.component.css']
})
export class ProductoSeleccionadoComponent implements OnInit {
  @Input() producto: Producto;

  constructor() { }

  ngOnInit() {
  }
  ngModel(){}

}
