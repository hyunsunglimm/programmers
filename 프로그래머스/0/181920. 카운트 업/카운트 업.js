function solution(start_num, end_num) {
  const list = [];

  for (let i = 0; i < end_num - start_num + 1; i++) {
    list.push(start_num + i);
  }

  return list;
}