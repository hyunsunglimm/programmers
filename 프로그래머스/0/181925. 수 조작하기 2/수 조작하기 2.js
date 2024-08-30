function solution(numLog) {
  return numLog
    .map((v, i) => (i === 0 ? v : numLog[i] - numLog[i - 1]))
    .slice(1)
    .map((v) => {
      switch (v) {
        case 1:
          return "w";
        case -1:
          return "s";
        case 10:
          return "d";
        case -10:
          return "a";
      }
    })
    .join("");
}