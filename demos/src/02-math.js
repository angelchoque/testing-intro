// Función para sumar
function sum(a, b) {
  return a + b;
}

// Función para multiplicar
function multiply(a, b) {
  return a * b;
}

// Función para dividir
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}

// Exportamos nuestras funciones como paquetes
module.exports = {
  sum,
  multiply,
  divide,
};
