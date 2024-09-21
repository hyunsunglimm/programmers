const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function solution(s, skip, index) {
  const alphabetWithoutSkip = alphabet.filter((v) => !skip.includes(v));

  return [...s]
    .map((v) => {
      const appliedIndex =
        (alphabetWithoutSkip.findIndex((a) => a === v) + index) %
        alphabetWithoutSkip.length;
      return alphabetWithoutSkip[appliedIndex];
    })
    .join("");
}