// Exportar funciones creadas
const { sum, multiply, divide } = require('./02-math');

/* Para empezar a testear nuestras funciones debemos usar la palabra
reservada test como función */

/* Dentro de esta función vamos a escribir como string que es lo que
esperamos que haga esta función, ósea es una pequeña descripción de
lo que se supone debe hacer la función */

/* Luego de esto vamos a tener una fución que será el manejador del
test, en esta estableceremos la lógica de nuestro test */

// test("añadir 1 + 3 debe dar 4", ()=> {
//   // Ejecutamos nuestra función y le pasamos sus respectivos valores
//   const rta = sum(1,3);

//   /* Expect tendrá la ejecución de la función y toBe tendrá el
//   resultado que esperamos de la función */
//   expect(rta).toBe(4);
// });

test('añadir 1 + 3 debe dar 4', () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test('añadir 9 x 2 debe dar 18', () => {
  const rta = multiply(9, 2);
  expect(rta).toBe(18);
});

test('añadir 12 / 3 debe dar 4', () => {
  const rta = divide(12, 3);
  expect(rta).toBe(4);

  // Podemos tener varios escenarios de prueba en nuestros test
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});

test('dividir entre 0 nos debe retornar un string que diga "no se puede dividir entre 0"', () => {
  const rta = divide(0, 0);
  expect(rta).toBeNull();
});
