import {sumar, multiplicar} from "./sumador.js";
describe("Sumar", () => {
  it("debería sumar dos números", () => {
    expect(sumar(3, 2)).toEqual(5); // Prueba de suma
  });
});

describe("Multiplicar", () => {
  it("debería multiplicar dos números", () => {
    expect(multiplicar(3, 2)).toEqual(6); // Prueba de multiplicación
  });
});
