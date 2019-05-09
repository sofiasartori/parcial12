import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { MostrarProductoComponent } from './mostrar-producto/mostrar-producto.component';
import { VentasComponent } from './ventas/ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    EliminarProductoComponent,
    BuscarProductoComponent,
    MostrarProductoComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
