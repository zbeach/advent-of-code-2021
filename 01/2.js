console.log(
  require('fs')
    .readFileSync('input')
    .toString()
    .split('\n')

    .map(str => parseInt(str))

    .map((depth, i, depths) => depth + (depths[i + 1] || 0) + (depths[i + 2] || 0))

    .reduce(
      ({ previousSum, count }, currentSum) => ({
        previousSum: currentSum,
        count: count + (currentSum > previousSum ? 1 : 0)
      }),
      { count: 0 }
    )

    .count
);