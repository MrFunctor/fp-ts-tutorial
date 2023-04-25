const inverse = (x: number): number => {
  if (x === 0) {
    throw new Error('Cannot get inverse of 0.')
  }

  return 1 / x
}
