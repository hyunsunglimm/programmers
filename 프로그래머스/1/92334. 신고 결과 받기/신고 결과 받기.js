function solution(id_list, report, k) {
  const reports = new Set(report); // 중복 신고 제거
  const reportCount = {}; // 각 유저가 받은 신고 횟수 저장
  const userReports = {}; // 각 유저가 신고한 유저 목록 저장

  // 유저마다 빈 배열로 초기화
  id_list.forEach((id) => {
    reportCount[id] = 0;
    userReports[id] = [];
  });

  // 신고 내용 처리
  reports.forEach((entry) => {
    const [from, to] = entry.split(" ");
    if (!userReports[from].includes(to)) {
      userReports[from].push(to);
      reportCount[to] += 1;
    }
  });

  // 정지된 유저 목록 확인
  const suspendedUsers = new Set(
    Object.keys(reportCount).filter((user) => reportCount[user] >= k)
  );

  // 결과 생성
  return id_list.map(
    (user) =>
      userReports[user].filter((reportedUser) =>
        suspendedUsers.has(reportedUser)
      ).length
  );
}