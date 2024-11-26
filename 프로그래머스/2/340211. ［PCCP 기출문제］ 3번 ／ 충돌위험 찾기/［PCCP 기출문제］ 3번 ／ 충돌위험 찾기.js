function solution(points, routes) {
  const robotRoutes = routes.map((route) => route.map((r) => points[r - 1]));
  const startPoints = robotRoutes.map((r) => r[0]);
  const endPoints = robotRoutes.map((r) => r.filter((_, i) => i > 0));

  let locations = startPoints;

  let count = 0;

  let course = Array(endPoints.length).fill(0);

  const courseCount = endPoints[0].length;

  count += accident(locations);

  while (!locations.every((l) => l === null)) {
    locations = locations.map((l, i) => {
      if (l == null) return null;
      if (
        l[0] === endPoints[i][course[i]][0] &&
        l[1] === endPoints[i][course[i]][1] &&
        course[i] < courseCount - 1
      ) {
        course[i]++;
      }
      return move(l, endPoints[i][course[i]]);
    });
    count += accident(locations);
  }

  return count;
}

function move(start, end) {
  if (start == null || end == null) return null;

  const result = [...start];
  const [s_r, s_c] = start;
  const [e_r, e_c] = end;

  if (s_r > e_r) {
    result[0] = s_r - 1;
  } else if (s_r < e_r) {
    result[0] = s_r + 1;
  } else if (s_c > e_c) {
    result[0] = s_r;
    result[1] = s_c - 1;
  } else if (s_c < e_c) {
    result[0] = s_r;
    result[1] = s_c + 1;
  } else {
    return null;
  }

  return result;
}

function accident(locations) {
  const map = locations
    .filter((l) => l !== null)
    .map((v) => JSON.stringify(v))
    .reduce((acc, cur) => {
      acc[cur] = (acc[cur] || 0) + 1;
      return acc;
    }, {});

  return Object.keys(map).filter((k) => map[k] > 1).length;
}