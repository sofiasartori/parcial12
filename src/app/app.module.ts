import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductoSeleccionadoComponent } from './producto-seleccionado.component';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './producto/producto.component';
import { EliminarProductoComponent } from './eliminar-producto/eliminar-producto.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductoSeleccionadoComponent,
    ProductoComponent,
    EliminarProductoComponent,
    BuscarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
