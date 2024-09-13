function solution(spell, dic) {
  return spell.reduce((acc, cur) => acc.filter((v) => v.includes(cur)), dic)
    .length === 0
    ? 2
    : 1;
}