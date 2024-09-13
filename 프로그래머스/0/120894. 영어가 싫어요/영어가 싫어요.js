const numArr = [
  { before: "one", after: "1" },
  { before: "two", after: "2" },
  { before: "three", after: "3" },
  { before: "four", after: "4" },
  { before: "five", after: "5" },
  { before: "six", after: "6" },
  { before: "seven", after: "7" },
  { before: "eight", after: "8" },
  { before: "nine", after: "9" },
  { before: "zero", after: "0" },
];

function solution(numbers) {
  return Number(
    numArr.reduce((acc, cur) => acc.replaceAll(cur.before, cur.after), numbers)
  );
}