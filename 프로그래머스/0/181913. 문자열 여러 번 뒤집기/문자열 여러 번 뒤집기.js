const stringReverse = (string, [start, end]) => {
  const front = string.slice(0, start);
  const target = string.slice(start, end + 1);
  const back = string.slice(end + 1);

  const reverse = target.split("").reverse().join("");

  return front + reverse + back;
};

function solution(my_string, queries) {
  return queries.reduce((acc, cur) => stringReverse(acc, cur), my_string)
}
