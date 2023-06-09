import { random } from 'lodash'

export const genRandomArray = (len = 4) => {
  const arr = Array.from({ length: len }).map((i, ind) => ind).sort((a, b) => random(-1.1, 1.1))
  return arr
}
