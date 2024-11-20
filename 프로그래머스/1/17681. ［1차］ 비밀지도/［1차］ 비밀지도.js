function solution(n, arr1, arr2) {
  const binaryArr1 = arr1.map((v) => parseInt(v.toString(2)));
  const binaryArr2 = arr2.map((v) => parseInt(v.toString(2)));

  const result = Array(n)
    .fill()
    .map((_, i) => binaryArr1[i] + binaryArr2[i])
    .map((v) => v.toString().padStart(n, "0"))
    .map((v) => [...v].map((w) => (parseInt(w) >= 1 ? "#" : " ")))
    .map((v) => v.join(""));

  return result;
}