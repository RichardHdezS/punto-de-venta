import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/bd';
import { DbService } from '../../../service/db.service';//importamos los servicios de la base de datos para clientes

@Component({
  selector: 'app-registra-clientes',
  templateUrl: './registra-clientes.component.html',
  styleUrls: ['./registra-clientes.component.css']
})
export class RegistraClientesComponent implements OnInit {

  NuevoCliente:Cliente;

  constructor(private router:Router, private database:DbService) { }

  ngOnInit(): void {
    this.NuevoCliente = new Cliente("", "", "", "", 0);//creamos un nuevo objeto para clientes
  }

  onSubmit(form){
    this.database.create_cliente(this.NuevoCliente);//una vez presionado el boton de registra se creara un nuevo cliente
    this.router.navigate(['/clientes']);//regresamos a la visrta de clientes
  }

}
