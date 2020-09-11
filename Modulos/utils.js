const { defaultTo } = require("ramda");

function sum(a, b) {
  return a + b;
}

// named export
// vários exports dentro de um mesmo arquivo
// porém só pode chamar com o mesmo nome
// o import precisa das chaves
export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

// também é possível exportar variáveis
const PI = "3.141592653589793";

// export separado
export { mult, div, PI };

// método principal
// só pode ter um default por arquivo
// importar com qualquer nome
// não precisa utilizar as chaves
export default sum;
