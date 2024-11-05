function solution(numbers, hand) {
  let left = "*";
  let right = "#";

  return numbers
    .map((n) => {
      switch (n) {
        case 1:
          left = "1";
          return "L";
        case 4:
          left = "4";
          return "L";
        case 7:
          left = "7";
          return "L";

        case 3:
          right = "3";
          return "R";
        case 6:
          right = "6";
          return "R";
        case 9:
          right = "9";
          return "R";

        default:
          if (distance(n, left) === distance(n, right)) {
            if (hand === "left") {
              left = n.toString();
              return "L";
            } else {
              right = n.toString();
              return "R";
            }
          } else {
            if (distance(n, left) > distance(n, right)) {
              right = n.toString();
              return "R";
            } else {
              left = n.toString();
              return "L";
            }
          }
      }
    })
    .join("");
}

function distance(start, end) {
  const coordinate = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  const [startX, startY] = coordinate[start];
  const [endX, endY] = coordinate[end];

  return Math.abs(startX - endX) + Math.abs(startY - endY);
}