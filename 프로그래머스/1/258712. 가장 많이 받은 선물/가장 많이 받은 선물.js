const generateObj = (friend, gifts) => {
  return gifts.reduce(
    (acc, cur) => {
      const [a, b] = cur.split(" ");

      if (a === friend) {
        acc.give[b] = (acc.give[b] || 0) + 1;
        acc.giftIdx++;
      }
      if (b === friend) {
        acc.take[a] = (acc.take[a] || 0) + 1;
        acc.giftIdx--;
      }

      return acc;
    },
    { give: {}, take: {}, giftIdx: 0, count: 0 }
  );
};

const setCount = (info) => {
  for (const key in info) {
    const keys = Object.keys(info);
    const others = keys.filter((v) => v !== key);

    for (const v of others) {
      if ((info[key].give[v] || 0) > (info[key].take[v] || 0))
        info[key].count++;

      if ((info[key].give[v] || 0) === (info[key].take[v] || 0)) {
        if (info[key].giftIdx > info[v].giftIdx) info[key].count++;
      }
    }
  }

  return info;
};

function solution(friends, gifts) {
  const info = {};
  for (let v of friends) {
    info[v] = generateObj(v, gifts);
  }

  const result = setCount(info);

  return Object.entries(result)
    .map((v) => v[1].count)
    .sort((a, b) => b - a)[0];
}