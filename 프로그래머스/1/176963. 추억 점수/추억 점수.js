function solution(name, yearning, photo) {
  const yearningObj = name.reduce((acc, cur, i) => {
    acc[cur] = yearning[i];
    return acc;
  }, {});

  return photo.map((v, i) =>
    v.reduce((acc, cur) => {
      return acc + (yearningObj[cur] || 0);
    }, 0)
  );
}