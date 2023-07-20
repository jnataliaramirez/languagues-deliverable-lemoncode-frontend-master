// ## Apartado C

f();
const a = 1;

function f() {
  // 1. Primer console.log
  console.log(a);
  // b = 4;
  var c = 3;
}

// 2. Segundo console.log
console.log(a);
// 3. Tercer console.log
console.log(b);
// 4. Cuarto console.log
console.log(c);

/** RESPUESTA
 * 1. undefined, porque la variable var a aún no ha sido declarada y js hace hoisting de la variable asignandole undefined.
 * 2. 1, porque a ha sido declarada en el scope global. 
 * 3. ReferenceError is not defined, porque esta variable no ha sido declarada, ni asignada, en el scope global.
 * 4. ReferenceError is not defined, porque esta variable no ha sido declarada, ni asignada, en el scope global. 
 */