function solution(str1, str2) {
  const newArr = [...str1, ...str2];
  return newArr.map((_, i) => (i % 2 ? str2[(i - 1) / 2] : str1[i / 2])).join('')
}
