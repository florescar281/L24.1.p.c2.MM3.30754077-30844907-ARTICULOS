export class Cl_Articulos {
    constructor(cantidad, precioBase) {
        this.cantidad = cantidad;
        this.precioBase = precioBase;
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;
    }
    get cantidad() {
        return this._cantidad;        
    }

    set precioBase(precioBase) {
        this._precioBase = precioBase;
    }
    get precioBase() {
        return this._precioBase;
    }
}