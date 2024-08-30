function solution(number) {
    return number.split('').map(v => Number(v)).reduce((acc, cur) => acc + cur, 0) % 9
}