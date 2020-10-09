import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { ReporteValorInventarioComponent } from './components/reporte-valor-inventario/reporte-valor-inventario.component';

//importamos los routings
import { APP_ROUTING } from './app.routes';

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
    BrowserModule,
    //AppRoutingModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
