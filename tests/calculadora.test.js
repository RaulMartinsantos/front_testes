const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.calc(2, "+", 2);
  expect(resultado).toBe(4);
});

test("somar 5 - 100 deveria retornar 95", () => {
  const resultado = calculadora.calc(100, "-", 5);
  expect(resultado).toBe(95);
});

test("Somar 'Banana' com 100 deveria retornar erro", () => {
  const resultado = calculadora.calc("banana", "+", 100);
  expect(resultado).toBe("Erro");
});

test("teste de divisão por 0", () => {
  const resultado = calculadora.calc(100, "/", 0);
  expect(resultado).toBe("Não é possivel dividir por 0");
});
