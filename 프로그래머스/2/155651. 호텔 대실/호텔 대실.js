function solution(book_time) {
  const minArr = book_time.map((v1) =>
    v1.map((v2) => {
      const [hour, min] = v2.split(":");
      return Number(hour) * 60 + Number(min);
    })
  );

  minArr.sort((a, b) => a[0] - b[0]);

  // 시작 시간을 기준으로 정렬
  minArr.sort((a, b) => a[0] - b[0]);

  // 각 객실의 종료 시간을 저장하는 배열
  const rooms = [];

  // 예약 처리
  for (const [start, end] of minArr) {
    let assigned = false;

    // 기존 객실 중 사용할 수 있는 객실 찾기
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i] <= start) {
        // 청소 시간 후, 현재 예약으로 객실 사용
        rooms[i] = end + 10;
        assigned = true;
        break;
      }
    }

    // 기존 객실을 사용할 수 없다면 새 객실 추가
    if (!assigned) {
      rooms.push(end + 10);
    }
  }

  return rooms.length;
}