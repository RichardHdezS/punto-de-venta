import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/bd';
import { DbService } from '../../service/db.service';//importamos los servicios de la base de datos para clientes

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes:Cliente[];//arreglo de cliente lo asignamos a clientes

  constructor(
    private router: Router,
    private database: DbService//asignamos los servicios a la variable database
  ) { }

  ngOnInit(): void {//este metodo se ejecuta al cargar la vista
    this.clientes = this.database.get_clientes();//obtenemos los clientes de la base de datos (localStoraged) y lo guardamos en el arreglo clientes
  }

}
