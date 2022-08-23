import sumar from './mod1.mjs';
import restar from './mod2.mjs';
import multi from './mod3.mjs';
import matematicas from 'basic-maths';
import fs from 'node:fs';

console.log('- la suma de 4 + 5 es:', sumar(4, 5));
console.log('- la resta de 4 - 5 es: ', restar(4, 5));
console.log('- la multiplicacion de 4 * 5 es: ', multi(4, 5));
console.log('- la potencia de 4 ** 5 es: ', matematicas.powOperation(4, 5));

const contenido = fs.readFileSync('./mod1.mjs', 'utf-8');
console.log('- el archivo mod1.mjs es:', contenido);