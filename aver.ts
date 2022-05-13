class ente{
    private nombre:string;
    private nacimiento:number;

    constructor(año: number, identidad:string) {;
    this.nacimiento = año;
    this.nombre = identidad;
    }

    public comoTeLlamas(): string{;
        return "Me llamo "+ this.nombre;
    }

    public tengoEquisAños(){;
        const edad = 2022 - this.nacimiento;
        return "Tengo "+edad+"años";
    }

    public estoyViejo(){;
         if(this.nacimiento) {
            this.nacimiento <= 1999;
            return "estás viejx";
        }
        if(this.nacimiento) {
            this.nacimiento > 1999;
            return "sos joven";
        }
    }
}

//perdí HORAS por olvidarme de que existe el new lpm
const alguien = new ente(2001, "Lukas Santillán");
//me sale [Function (anonymous)] en el output siempre, acá hay un problema
console.log(alguien.estoyViejo);
console.log(alguien.comoTeLlamas);
console.log(alguien.tengoEquisAños);
