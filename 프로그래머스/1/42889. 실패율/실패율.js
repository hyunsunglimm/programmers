function solution(N, stages) {
  const stageCounts = Array(N + 2).fill(0);
  stages.forEach((stage) => stageCounts[stage]++);

  let totalPlayers = stages.length;
  const result = [];

  for (let i = 1; i <= N; i++) {
    const failed = stageCounts[i];
    const failureRate = failed / totalPlayers || 0;
    result.push([i, failureRate]);
    totalPlayers -= failed;
  }

  return result.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}