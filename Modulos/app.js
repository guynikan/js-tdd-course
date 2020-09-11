// formas de usar o import

// import método from 'biblioteca'
// eu posso importar todos os métodos também, chamando *
// quando eu faço isso, é obrigatório atribuir um alias
// através do as [alias]
// ex:
import * as R from "ramda";

// quando forem arquivos que n estão pelo NPM
// é preciso definir o caminho
import sum from "./utils";
import { sub, mult, div, PI } from "./utils";

// eu posso também chamar apenas um método, pra isso
// eu uso a seguinte syntax:
// import {método} from 'biblioteca

const arr1 = [1, 1, 1, 2, 3, 4, 3, 4];
const arr2 = [1, 1, 1, 2, 3, 2, 3, 4];

const arr3 = R.union(arr1, arr2);

console.log(arr3, "teste1");
console.log(sum(10, 20));
console.log(sub(30, 10));
console.log(mult(2, 3));
console.log(div(100, 2));
console.log(PI);
