import { Producto } from '../app/producto';

export class Venta extends Producto {
  id: number;
  descripcion: string;
  tipo: string;
  fechaDeVencimiento: string;
  precio: number;
  rutaDeFoto: string;
  fechaDeVenta: string;
  cantidad: number;

  public constructor(id: number, descripcion: string, tipo: string, fechaDeVencimiento: string, precio: number, rutaDeFoto: string, fechaDeVenta: string, cantidad: number){
    super(id, descripcion, tipo, fechaDeVencimiento, precio, rutaDeFoto);
    this.fechaDeVenta = fechaDeVenta;
    this.cantidad = cantidad;
  }
}
