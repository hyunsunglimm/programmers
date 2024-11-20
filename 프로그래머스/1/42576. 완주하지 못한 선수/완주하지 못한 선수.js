function solution(participant, completion) {
  const participantMap = participant.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (const c of completion) {
    participantMap[c]--;
  }

  return Object.keys(participantMap).filter((v) => participantMap[v] > 0)[0];
}