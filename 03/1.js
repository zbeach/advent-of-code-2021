console.log(
  require('fs')
    .readFileSync('input')
    .toString()
    .split('\n')

  .reduce(
    ({ counts }, value) => ({
      counts: value
        .split('')
        .map(
          (bitValue, i) => [
            counts[i][0] + (bitValue === '0' ? 1 : 0),
            counts[i][1] + (bitValue === '1' ? 1 : 0)
          ]
        ),
      get gammaRate() {
        return parseInt(
          this.counts
            .map(bitCount => bitCount[0] > bitCount[1] ? 0 : 1)
            .join(''),
          2
        )
      },
      get epsilonRate() {
        return parseInt(
          this.gammaRate
            .toString(2)
            .split('')
            .map(bitValue => bitValue === '0' ? 1 : 0)
            .join(''),
          2
        )
      },
      get product() { return this.gammaRate * this.epsilonRate }
    }),
    { counts: new Array(12).fill([0, 0]) }
  )

  .product
);