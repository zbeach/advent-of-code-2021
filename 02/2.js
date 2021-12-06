console.log(
  require('fs')
    .readFileSync('input')
    .toString()
    .split('\n')

    .map(line => ({
      direction: line.split(' ')[0],
      distance: parseInt(line.split(' ')[1])
    }))

    .reduce(
      ({ aim, x, y }, { direction, distance }) => ({
        aim: aim + (direction === 'up' ? -distance : direction === 'down' ? distance : 0),
        x: x + (direction === 'forward' ? distance : 0),
        get y() { return y + (direction === 'forward' ? this.aim * distance : 0) },
        get product() { return this.x * this.y }
      }),
      { aim: 0, x: 0, y: 0 }
    )

    .product
)
