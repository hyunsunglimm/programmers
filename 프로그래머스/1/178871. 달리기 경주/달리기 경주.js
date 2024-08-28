function solution(players, callings) {
  const playerIndices = {};

  players.forEach((player, index) => {
    playerIndices[player] = index;
  });

  callings.forEach((call) => {
    const callIndex = playerIndices[call];

    if (callIndex > 0) {
      const prevPlayer = players[callIndex - 1];

      players[callIndex - 1] = call;
      players[callIndex] = prevPlayer;

      playerIndices[call]--;
      playerIndices[prevPlayer]++;
    }
  });

  return players;
}