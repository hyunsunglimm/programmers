function solution(str_list, ex) {
  const newArr = str_list.filter((v) => !v.includes(ex));

  return newArr.join("");
}
