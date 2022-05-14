export class ente{
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
        let añoActual = new Date();
        let añoUsable:number = añoActual.getFullYear()
        const edad = añoUsable - this.nacimiento;
        return "Tengo "+edad+"años";
    }

    public estoyViejo(){;
         if(this.nacimiento <= 1999) {
            return "estás viejx";
        }
        if(this.nacimiento > 1999 && this.nacimiento < 2011) {
            return "sos joven";
        } else {
            return "sos un bebé parlante"
        }
    }
}

