function solution(array) {
    return [Math.max(...array), array.findIndex(v => v === Math.max(...array))]
}