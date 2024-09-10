function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((v, i) => ({
      id: i,
      rank: v,
      isParticipated: attendance[i],
    }))
    .filter((v) => v.isParticipated)
    .sort((a, b) => a.rank - b.rank)
    .slice(0, 3)
    .map((v) => v.id);

  return 10000 * a + 100 * b + c;
}