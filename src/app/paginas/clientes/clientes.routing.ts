import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';
import { RegistraClientesComponent } from './registra-clientes/registra-clientes.component'//importamos el componente

const routes : Routes = [
    {
        path: '',
        component: ClientesComponent,
        children: [
            {
                //rutas hijas de clientes
                path: 'registra',
                component: RegistraClientesComponent
            },
        ]
    }
  ];
  
  NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export const APP_ROUTING = RouterModule.forRoot(routes);
