"use strict";
export default class Ente {
    constructor(año, identidad) {
        ;
        this.nacimiento = año;
        this.nombre = identidad;
    }
    comoTeLlamas() {
        ;
        return "Me llamo " + this.nombre;
    }
    tengoEquisAños() {
        ;
        let añoActual = new Date();
        let añoUsable = añoActual.getFullYear();
        const edad = añoUsable - this.nacimiento;
        return "Tengo " + edad + " años";
    }
    estoyViejo() {
        ;
        if (this.nacimiento <= 1999) {
            return "estás viejx";
        }
        if (this.nacimiento > 1999 && this.nacimiento < 2011) {
            return "sos joven";
        }
        else {
            return "sos un bebé parlante";
        }
    }
}
exports.Ente = Ente;
