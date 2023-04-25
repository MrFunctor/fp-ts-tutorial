const getBestMovie = (titles: ReadonlyArray<string>): string => {
  const firstTitle = titles[0] // string | undefined

  if (firstTitle === undefined) {
    throw new Error('Cannot get the best movie.')
  }

  return `Best - ${firstTitle.toUpperCase()}`
}
