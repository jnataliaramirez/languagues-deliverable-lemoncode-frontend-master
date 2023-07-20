// ## Apartado B

var a = 1;

(function () {
  // 1. Primer console.log
  console.log(a);
  var a = 2;
  b = 4;
  var c = 3;
})();

// 2. Segundo console.log
console.log(a);
// 3. Tercer console.log
console.log(b);
// 4. Cuarto console.log
console.log(c);

/** RESPUESTA
 * 1. undefined, ya que la función autoinvocada declara dentro de su scope la variable var a, y por hoisting es declarada al principio con una asignación de undefined.
 * 2. 1, porque la variable a, ya ha sido asignada y declarada, en el scope global de la aplicación. 
 * 3. ReferenceError is not defined, porque esta variable no ha sido declarada,ni asignada, en el scope global. 
 * 4. ReferenceError is not defined, porque esta variable no ha sido declarada, ni asignada, en el scope global. 
 */
