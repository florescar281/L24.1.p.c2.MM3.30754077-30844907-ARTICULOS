import { Cl_Juguete } from "./Cl_Juguete.js";

export class Cl_Main {
    constructor() {
        this.salida = document.getElementById("salida");
        this.iniciar();
    }

    iniciar() {
        let juguetes = new Cl_Juguete("Carrito", 2, 10, 2);
        let juguetes2 = new Cl_Juguete("Peluche", 3, 20, 1);

        this.salida.innerHTML = `
        <p>Nombre del juguete: ${juguetes.nombre} <br>
        Cantidad: ${juguetes.cantidad} <br>
        Precio base: $${juguetes.precioBase} <br>
        Edad recomendada: ${juguetes.edad} <br>
        Monto a pagar por el carrito: ${juguetes.precioTotal()} <br>
        <br>
        Nombre del juguete: ${juguetes2.nombre} <br>
        Cantidad: ${juguetes2.cantidad} <br>
        Precio base: $${juguetes2.precioBase} <br>
        Edad recomendada: ${juguetes2.edad} <br>
        Monto a pagar por el carrito: ${juguetes2.precioTotal()}
        </p>
        `
    }
}