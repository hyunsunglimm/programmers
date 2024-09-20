const cal = (keymap, target) => {
  const isMade = ![...target]
    .map((v) => keymap.filter((k) => k.includes(v)))
    .some((arr) => arr.length === 0);

  if (!isMade) return -1;

  return [...target]
    .map(
      (v) =>
        Math.min(
          ...keymap.filter((k) => k.includes(v)).map((k) => k.indexOf(v))
        ) + 1
    )
    .reduce((acc, cur) => acc + cur, 0);
};

function solution(keymap, targets) {
  return targets.map((v) => cal(keymap, v));
}