console.log(
  require('fs')
    .readFileSync('input')
    .toString()
    .split('\n')

    .map(str => parseInt(str))

    .reduce(
      ({ previousDepth, count }, currentDepth) => ({
        previousDepth: currentDepth,
        count: count + (currentDepth > previousDepth ? 1 : 0)
      }),
      { count: 0 }
    )

    .count
);