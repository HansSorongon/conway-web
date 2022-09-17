import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useCallback, useState, useRef, useEffect } from 'react'
import { Box, Container } from '@chakra-ui/react'

const numCols = 70
const numRows = 50

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
      rows.push(Array.from(Array(numCols), () => (Math.random() > 0.8 ? 1 : 0)))
    }

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
    runningRef.current = true
    runSimulation()
  }, [grid])

  return (
    <Box bg="black" {...props}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, 20px)`,
        }}
      >
        {grid.map((rows, i) =>
          rows.map((col, k) => (
            <div
              key={`${i}-${k}`}
              onClick={() => {
                const newgrid = produce(grid, (newgrid) => {
                  newgrid[i][k] = 1 - newgrid[i][k]
                })
                setGrid(newgrid)
              }}
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: grid[i][k] ? '#858585' : 'black',
              }}
            />
          ))
        )}
      </div>
    </Box>
  )
}

export default Canvas
