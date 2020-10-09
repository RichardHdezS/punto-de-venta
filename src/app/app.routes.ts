//Este clase permite entutar los componenetes a sus templates correspondientes
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ReporteValorInventarioComponent } from './components/reporte-valor-inventario/reporte-valor-inventario.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { VentasComponent } from './components/ventas/ventas.component';

const APP_ROUTES: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'reportevalorinventario', component: ReporteValorInventarioComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'ventas', component: VentasComponent}
//   // Esta ruta es para seleccionemos un enlace sin ruta cualquiera.
//   { path: 'inicio', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);