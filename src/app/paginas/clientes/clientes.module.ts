import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { RegistraClientesComponent } from './registra-clientes/registra-clientes.component';

const routes: Routes = [
  { 
    path: '', 
    component: ClientesComponent,
    children: [//este es un hijo del componente de registrar clientes
      {
        path: 'registra',
        component: RegistraClientesComponent
      },
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }