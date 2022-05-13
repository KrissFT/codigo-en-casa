var ente = /** @class */ (function () {
    function ente(año, identidad) {
        ;
        this.nacimiento = año;
        this.nombre = identidad;
    }
    ente.prototype.comoTeLlamas = function () {
        ;
        return "Me llamo " + this.nombre;
    };
    ente.prototype.tengoEquisAños = function () {
        ;
        var edad = 2022 - this.nacimiento;
        return "Tengo " + edad + "años";
    };
    ente.prototype.estoyViejo = function () {
        ;
        if (this.nacimiento) {
            this.nacimiento <= 1999;
            return "estás viejx";
        }
        if (this.nacimiento) {
            this.nacimiento > 1999;
            return "sos joven";
        }
    };
    return ente;
}());
//perdí HORAS por olvidarme de que existe el new lpm
var alguien = new ente(2001, "Lukas Santillán");
//me sale [Function (anonymous)] en el output siempre, acá hay un problema
console.log(alguien.estoyViejo);
console.log(alguien.comoTeLlamas);
console.log(alguien.tengoEquisAños);
