import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentasComponent } from './ventas/ventas.component';
import { TicketComponent } from './ticket/ticket.component';
import { ReporteValorInventarioComponent } from './reporte-valor-inventario/reporte-valor-inventario.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    InventarioComponent,
    VentasComponent,
    TicketComponent,
    ReporteValorInventarioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
