function solution(park, routes) {
  const parkArr = park.map((v) => [...v]);
  const initCol = parkArr.findIndex((v) => v.includes("S"));
  const initRow = parkArr[initCol].findIndex((v) => v === "S");
  const maxCol = parkArr.length;
  const maxRow = parkArr[0].length;

  const processedRoutes = routes.map((v) => [
    v.split(" ")[0],
    Number(v.split(" ")[1]),
  ]);

  return processedRoutes.reduce(
    ([col, row], [dir, dis]) => {
      switch (dir) {
        case "E":
          for (let i = 1; i <= dis; i++) {
            if (row + i >= maxRow || parkArr[col][row + i] === "X")
              return [col, row];
          }
          return [col, row + dis];
        case "W":
          for (let i = 1; i <= dis; i++) {
            if (row - i < 0 || parkArr[col][row - i] === "X") return [col, row];
          }
          return [col, row - dis];
        case "S":
          for (let i = 1; i <= dis; i++) {
            if (col + i >= maxCol || parkArr[col + i][row] === "X")
              return [col, row];
          }
          return [col + dis, row];
        case "N":
          for (let i = 1; i <= dis; i++) {
            if (col - i < 0 || parkArr[col - i][row] === "X") return [col, row];
          }
          return [col - dis, row];
      }
    },
    [initCol, initRow]
  );
}