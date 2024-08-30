function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  } else {
    const sum = (a, b) => a + b;
    const arr1Sum = arr1.reduce(sum, 0);
    const arr2Sum = arr2.reduce(sum, 0);

    if (arr1Sum === arr2Sum) {
      return 0;
    } else {
      return arr1Sum > arr2Sum ? 1 : -1;
    }
  }
}
