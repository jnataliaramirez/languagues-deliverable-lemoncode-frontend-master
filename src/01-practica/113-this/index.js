var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
// Jiménez, porqué su contexto es el objeto wife.

var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());
// undefined, porqué no tiene contexto.

console.log(surnameFunction.call(person));
// Gonzalez, porqué con la función .call se le esta diciendo que el contexto del objeto sea person