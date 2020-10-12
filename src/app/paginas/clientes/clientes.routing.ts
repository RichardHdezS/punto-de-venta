import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes.component';

const routes : Routes = [
    {
        path: '',
        component: ClientesComponent,
        children: [
            {
                //rutas hijas de clientes
            },
        ]
    }
  ];
  
  NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export const APP_ROUTING = RouterModule.forRoot(routes);
