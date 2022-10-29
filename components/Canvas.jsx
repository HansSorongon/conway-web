import { useCallback, useState, useRef, useEffect } from 'react'
import { Box, Button, useMediaQuery } from '@chakra-ui/react'

const numCols = 74
const numRows = 60

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
]

const Canvas = (props) => {
  const [grid, setGrid] = useState(() => {
    const rows = []
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0))
    }

    rows[10][10] = 1
    rows[11][10] = 1
    rows[12][10] = 1
    rows[10][11] = 1
    rows[11][9] = 1

    rows[10 + 10][10] = 1
    rows[11 + 10][10] = 1
    rows[12 + 10][10] = 1
    rows[10 + 10][9] = 1
    rows[11 + 10][11] = 1

    rows[10 + 25][10] = 1
    rows[11 + 25][10] = 1
    rows[12 + 25][10] = 1
    rows[10 + 25][11] = 1
    rows[11 + 25][9] = 1

    rows[25 - 18][25 + 15] = 1
    rows[25 - 18][26 + 15] = 1
    rows[25 - 18][27 + 15] = 1
    rows[24 - 18][27 + 15] = 1
    rows[23 - 18][26 + 15] = 1

    rows[8][57] = 1
    rows[9][57] = 1
    rows[10][57] = 1

    rows[8][59] = 1
    rows[9][59] = 1
    rows[10][59] = 1

    rows[14][57] = 1
    rows[15][57] = 1
    rows[16][57] = 1

    rows[14][59] = 1
    rows[15][59] = 1
    rows[16][59] = 1

    rows[13][60] = 1
    rows[13][61] = 1
    rows[13][62] = 1

    rows[7 + 20][60] = 1
    rows[8 + 20][60] = 1
    rows[9 + 20][61] = 1
    rows[9 + 20][59] = 1
    rows[10 + 20][60] = 1
    rows[11 + 20][60] = 1
    rows[12 + 20][60] = 1
    rows[13 + 20][60] = 1
    rows[14 + 20][59] = 1
    rows[14 + 20][61] = 1
    rows[15 + 20][60] = 1
    rows[16 + 20][60] = 1

    return rows
  })

  const produce = (grid, callback) => {
    const newgrid = JSON.parse(JSON.stringify(grid))
    callback(newgrid)
    return newgrid
  }

  const [running, setRunning] = useState(false)

  const runningRef = useRef()
  runningRef.current = running

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let k = 0; k < numCols; k++) {
            let neighbors = 0

            operations.forEach(([x, y]) => {
              const newI = i + x
              const newK = k + y
              if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                neighbors += g[newI][newK]
              }
            })

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1
            }
          }
        }
      })
    })
  }, [])

  useEffect(() => {
    // setRunning(!running)
    if (!running) {
      runningRef.current = true
      runSimulation()
    }
  }, [grid])

  return (
    <Box bg="black" {...props}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, x) =>
          rows.map((col, y) => (
            <div
              key={`${x}-${y}`}
              onClick={() => {
                const newgrid = produce(grid, (newgrid) => {
                  newgrid[x][y] = 1 - newgrid[x][y]
                  newgrid[x][y + 1] = 1 - newgrid[x][y + 1]
                  newgrid[x + 1][y] = 1 - newgrid[x + 1][y]
                  newgrid[x + 2][y] = 1 - newgrid[x + 2][y]
                  newgrid[x + 1][y - 1] = 1 - newgrid[x + 1][y - 1]
                })
                setGrid(newgrid)
              }}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: grid[x][y] ? '#858585' : 'black',
              }}
            />
          ))
        )}
      </div>
    </Box>
  )
}

export default Canvas
