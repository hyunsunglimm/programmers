function solution(keyinput, board) {
  const limitX = (board[0] - 1) / 2;
  const limitY = (board[1] - 1) / 2;

  return keyinput.reduce(
    (acc, cur) => {
      console.log(acc);
      switch (cur) {
        case "left":
          acc[0] > -limitX && acc[0]--;
          break;
        case "right":
          acc[0] < limitX && acc[0]++;
          break;
        case "up":
          acc[1] < limitY && acc[1]++;
          break;
        case "down":
          acc[1] > -limitY && acc[1]--;
          break;
      }
      return acc;
    },
    [0, 0]
  );
}