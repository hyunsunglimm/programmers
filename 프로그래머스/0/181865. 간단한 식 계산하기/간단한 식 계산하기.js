function solution(binomial) {
  const num1 = Number(binomial.split(" ")[0]);
  const num2 = Number(binomial.split(" ")[2]);
  const op = binomial.split(" ")[1];

  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
  }
}