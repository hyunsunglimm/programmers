function solution(code) {
  const ret = [];
  let mode = 0;

  [...code].forEach((v, i) => {
    if (mode === 0) {
      if (v !== "1") {
        i % 2 === 0 && ret.push(v);
      } else {
        mode++;
      }
    } else if (mode === 1) {
      if (v !== "1") {
        i % 2 === 1 && ret.push(v);
      } else {
        mode--;
      }
    }
  });

  return ret.join("") || "EMPTY";
}