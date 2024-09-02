function solution(myString, pat) {
  const strLength = myString.length;
  const patLength = pat.length;
  const arrLegnth = strLength - patLength + 1;

  const partialStrArr = Array(arrLegnth)
    .fill()
    .map((_, i) => myString.slice(i, patLength + i));

  return partialStrArr.filter((v) => v === pat).length;
}