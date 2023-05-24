// 1. Convierto el objeto a array, solo tomando los valores (notas).
const objValues = (obj) => Object.values(obj);

// 2. Función sumar con arrays
const sum = (values) => values.reduce((a, b) => a + b, 0);

// 3. Función length = total de notas que existen.
const length = (values) => values.length;

// 4. Función promedio.
const average = (values) => sum(values) / length(values);

// 5. Función para dar nota de forma textual.
const printQualification = (value) => {
  if (value === 10) {
    return "Matrícula de Honor";
  } else if (value >= 9 && value < 10) {
    return "Sobresaliente";
  } else if (value >= 7 && value < 9) {
    return "Notable";
  } else if (value >= 6 && value < 7) {
    return "Bien";
  } else if (value >= 5 && value < 6) {
    return "Suficiente";
  } else if (value >= 4 && value < 5) {
    return "Insuficiente";
  } else if (value < 4) {
    return "Muy deficiente";
  } else {
    return "Por favor, ingrese un valor válido.";
  }
};

// ! 5. Función que recibe en el argumento un objeto y retorna la nota de forma textual.
const printAverage = (classResults) => {
  const onlyQualification = objValues(classResults);
  const classAverage = average(onlyQualification);
  return printQualification(classAverage);
};

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

console.log(printAverage(eso2o));
