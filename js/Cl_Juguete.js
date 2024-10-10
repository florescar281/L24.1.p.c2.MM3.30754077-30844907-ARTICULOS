import { Cl_Articulos } from "./Cl_Articulos.js";

export class Cl_Juguete extends Cl_Articulos {
    constructor(nombre, cantidad, precioBase, edad) {
        super(cantidad, precioBase);
        this._nombre = nombre;
        this._edad = edad;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }

    descuento() {
        if (this.edad == 1) {
            return this.precioBase * 0.1;
        } else {
            return 0;
        }
    }

    precioTotal() {
        return this.cantidad * this.precioBase - this.descuento();
    }
}