import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//Importamos las paginas
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { InventarioComponent } from './paginas/inventario/inventario.component';
import { VentasComponent } from './paginas/ventas/ventas.component';
import { TicketComponent } from './paginas/ticket/ticket.component';
import { ReporteValorInventarioComponent } from './paginas/reporte-valor-inventario/reporte-valor-inventario.component';

//importamos los routings
import { APP_ROUTING } from './app.routing';
import { RegistraClientesComponent } from './paginas/clientes/registra-clientes/registra-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    InventarioComponent,
    VentasComponent,
    TicketComponent,
    ReporteValorInventarioComponent,
    RegistraClientesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
