function solution(X, Y) {
  let result = "";

  const countMapping = (acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  };
  const mapX = [...X].reduce(countMapping, {});
  const mapY = [...Y].reduce(countMapping, {});

  const commonKeys = Object.keys(mapX).filter((key) =>
    Object.keys(mapY).includes(key)
  );

  if (commonKeys.length === 0) return "-1";

  commonKeys
    .map((key) => [key, Math.min(mapX[key], mapY[key])])
    .forEach(([key, count]) => {
      result += key.repeat(count);
    });

  // 정렬된 결과가 "0"만으로 이루어진 경우 처리
  const sortedResult = [...result].sort((a, b) => b - a).join("");
  return sortedResult[0] === "0" ? "0" : sortedResult;
}
