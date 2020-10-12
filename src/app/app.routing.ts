//Este clase permite entutar los componenetes a sus templates correspondientes
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './paginas/clientes/clientes.component';
import { InventarioComponent } from './paginas/inventario/inventario.component';
import { ReporteValorInventarioComponent } from './paginas/reporte-valor-inventario/reporte-valor-inventario.component';
import { TicketComponent } from './paginas/ticket/ticket.component';
import { VentasComponent } from './paginas/ventas/ventas.component';

const routes : Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'reportevalorinventario', component: ReporteValorInventarioComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'ventas', component: VentasComponent}, 
   // Esta ruta es para seleccionemos un enlace sin ruta cualquiera.
 { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(routes);