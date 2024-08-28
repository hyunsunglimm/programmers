function solution(num_str) {
    return num_str.split('').map(v=>Number(v)).reduce((acc, cur) => acc + cur, 0)
}