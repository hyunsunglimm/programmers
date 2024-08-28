function solution(my_string) {
  const list = [];

  for (let i = 0; i < my_string.length; i++) {
    list.push(my_string.slice(i));
  }

  return list.sort();
}