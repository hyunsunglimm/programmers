function solution(a, b, c) {
  if (a !== b && b !== c && c !== a) return a + b + c;
  if (a === b && b === c) {
    return (
      (a + b + c) *
      (a * a + b * b + c * c) *
      (a * a * a + b * b * b + c * c * c)
    );
  }

  return (a + b + c) * (a * a + b * b + c * c);
}
