const getString = (s) => {
  const firstLetter = s[0];
  let current = 0;
  let another = 0;

  const stringArr = [...s];

  for (const letter of stringArr) {
    if (firstLetter === letter) {
      current++;
    } else {
      another++;
    }

    if (current > 0 && another > 0 && current === another) break;
  }

  return {
    result: s.slice(0, current + another),
    rest: s.slice(current + another),
  };
};

function solution(s) {
  const resultArr = [];
  while (s.length > 0) {
    const { result, rest } = getString(s);
    resultArr.push(result);
    s = rest;
  }

  return resultArr.length;
}