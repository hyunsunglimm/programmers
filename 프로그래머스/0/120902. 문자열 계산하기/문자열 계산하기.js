function solution(my_string) {
  const arr = my_string.split(" ");
  let num = Number(arr[0]);

  for (let i = 0; i < arr.length - 1; i += 2) {
    if (arr[i + 1] === "+") {
      num += Number(arr[i + 2]);
    } else {
      num -= Number(arr[i + 2]);
    }
  }

  return num;
}