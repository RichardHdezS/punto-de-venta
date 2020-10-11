export class Cliente {
	
	constructor(
		public clave: string,
		public nombre: string,
		public direccion: string,
		public telefono: string,
		public saldo: string,
	){}
}

export class Producto {
	
	constructor(
		public clave: string,
		public descripcion: string,
		public clasificacion: Clasificacion,
		public stock: number,
		public costo: number,
		public precio: number,
	){}
}

export class Clasificacion {
	
	constructor(
		public clave: string,
		public descripcion: string,
	){}
}

export class Venta {
	
	constructor(
		public folio: string,
		public fecha: string,
		public cliente: Cliente,
		public importe: number,
	){}
}

export class VentaDetalle {
	
	constructor(
		public producto: Producto,
		public cantidad: string,
		public precio: number,
		public importe: number,
	){}
}