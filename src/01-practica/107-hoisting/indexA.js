// ## Apartado A 

function f() {
  // 1. Primer console.log
  console.log(a);
  // 2. Segundo console.log
  console.log(g());

  var a = "good job!";
  function g() {
    return a;
  }
  // 3. Tercer console.log
  console.log(a);
}

f();


/** RESPUESTA
 * 1. undefined, porque hace hoisting de la declaración de la variable var a.
 * 2. undefined, porque la función retorna una variable que aún no esta asignada.
 * 3. "good job!", porque la variable ya ha sido asignada.
 */
