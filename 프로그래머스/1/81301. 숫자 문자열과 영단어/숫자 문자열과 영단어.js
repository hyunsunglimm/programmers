const words = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function solution(s) {
  const keys = Object.keys(words);

  while (!Number(s)) {
    for (const key of keys) {
      if (s.includes(key)) {
        s = s.replace(key, words[key]);
      }
    }
  }

  return parseInt(s);
}