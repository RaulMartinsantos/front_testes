function calc(num1, operador, num2) {
  switch (operador) {
    case "+":
      if (typeof num1 != "number") {
        return "Erro";
      }
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 == 0) {
        return "Não é possivel dividir por 0";
      }
      return num1 / num2;
  }
}

exports.calc = calc;
