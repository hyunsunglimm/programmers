function solution(arr, n) {
  const oddCase = arr.map((v, i) => i % 2 === 0 ? v + n : v)
  const evenCase = arr.map((v, i) => i % 2 === 1 ? v + n : v)

  return arr.length % 2 === 0 ? evenCase : oddCase
}