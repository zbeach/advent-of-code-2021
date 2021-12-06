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
      ({ x, y }, { direction, distance }) => ({
        x: x + (direction === 'forward' ? distance : 0),
        y: y + (direction === 'up' ? -distance : direction === 'down' ? distance : 0),
        get product() { return this.x * this.y }
      }),
      { x: 0, y: 0 }
    )

    .product
)
