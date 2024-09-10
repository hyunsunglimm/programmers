const solution = (l, r) => {
  const arr = [];
  let i = l;

  while (i >= l && i <= r) {
    if (
      String(i)
        .split("")
        .every((v) => v === "5" || v === "0")
    ) {
      arr.push(i);
    }
    i++;
  }

  return arr.length === 0 ? [-1] : arr;
};