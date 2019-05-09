import { Component, OnInit, Input, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
  @Input() productoBuscado :any;
  constructor() { 
  }

  ngOnInit() {
    console.log("prodB: " + this.productoBuscado);
  }

  ngOnChanges(changes: SimpleChanges) {

    console.log('productoBuscado: ' , this.productoBuscado);
    }

}
