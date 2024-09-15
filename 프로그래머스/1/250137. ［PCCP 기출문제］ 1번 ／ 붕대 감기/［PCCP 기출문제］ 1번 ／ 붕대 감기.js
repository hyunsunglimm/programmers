function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;
  const max_health = health;
  
  let successCount = 0;
  let attackIndex = 0;

  for (let i = 0; i <= attacks[attacks.length - 1][0]; i++) {
    // 공격 시간에 맞춰 공격 처리
    if (attackIndex < attacks.length && attacks[attackIndex][0] === i) {
      health -= attacks[attackIndex][1];
      attackIndex++;
      successCount = 0;  // 공격받으면 연속 성공 초기화
    } else {
      // 체력 회복
      health = Math.min(health + x, max_health);
      successCount++;
      
      // t초 연속 성공 시 추가 회복
      if (successCount === t) {
        health = Math.min(health + y, max_health);
        successCount = 0;
      }
    }

    // 체력이 0 이하가 되면 즉시 -1 반환
    if (health <= 0) {
      return -1;
    }
  }

  return health;
}


