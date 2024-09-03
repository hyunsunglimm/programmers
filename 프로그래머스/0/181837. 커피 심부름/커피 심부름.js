const americano = [
  "iceamericano",
  "americanoice",
  "hotamericano",
  "americanohot",
  "americano",
  "anything",
];

function solution(order) {
  return order
    .map((v) => (americano.includes(v) ? 4500 : 5000))
    .reduce((a, b) => a + b, 0);
}
