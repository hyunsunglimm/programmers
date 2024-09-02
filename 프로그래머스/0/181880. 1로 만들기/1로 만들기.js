function convert(num) {
  let count = 0;
  while (num !== 1) {
    if (num % 2) {
      num = (num - 1) / 2;
    } else {
      num = num / 2;
    }
    count += 1;
  }
  return count;
}

function solution(num_list) {
  return num_list.map((v) => convert(v)).reduce((acc, cur) => acc + cur, 0);
}