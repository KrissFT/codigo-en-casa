"use strict";
import Ente from './classes/Aver.js';
// acá pensé que podría pedir los 2 valores de ingreso en una línea con una coma en el medio pero me dio muchos errores, espero que se pueda hacer algo por el estilo porque exportar muchos valores sería muy feo
import {nombre} from './classes/ingreso.js';
import {nacimiento} from './classes/ingreso.js';

const alguien = new Ente(nacimiento, nombre);
console.log(alguien.estoyViejo());
console.log(alguien.comoTeLlamas());
console.log(alguien.tengoEquisAños());
