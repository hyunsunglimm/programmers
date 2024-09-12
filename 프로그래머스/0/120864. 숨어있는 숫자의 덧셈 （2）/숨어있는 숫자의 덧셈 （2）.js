function solution(my_string) {
  const numArr = my_string.match(/[0-9]+/g);

  return numArr
    ? my_string.match(/[0-9]+/g).reduce((acc, cur) => acc + Number(cur), 0)
    : 0;
}