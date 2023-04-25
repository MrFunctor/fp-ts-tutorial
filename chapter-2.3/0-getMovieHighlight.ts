import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'

type Movie = Readonly<{
  title: string
  releaseYear: number
  ratingPosition: number
  award?: string
}>

const getMovieAwardHighlight =
  (movie: Movie): O.Option<string> =>
    pipe(
      movie.award, // string | undefined
      O.fromNullable, // Option<string>
      O.map((award) =>
        `Awarded with: ${award}`
      ), // Option<string>
    )

const getMovieTop10Highlight =
  (movie: Movie): O.Option<string> =>
    pipe(
      movie,
      O.fromPredicate(({ ratingPosition }) =>
        ratingPosition <= 10
      ), // Option<Movie>
      O.map(({ ratingPosition }) =>
        `In TOP 10 at position: ${ratingPosition}`
      ), // Option<string>
    )

const getMovieHighlight = (movie: Movie): string =>
  pipe(
    movie,
    getMovieAwardHighlight, // Option<string>
    O.alt(() =>
      getMovieTop10Highlight(movie)
    ), // Option<string>
    O.getOrElse(() =>
      `Released in ${movie.releaseYear}`
    ), // string
  )

const movie1: Movie = {
  title: 'The Kingdom of Monads',
  releaseYear: 2023,
  ratingPosition: 1,
  award: 'Oscar',
}

getMovieHighlight(movie1)
// "Awarded with: Oscar"

const movie2: Movie = {
  title: 'Natural Transformations',
  releaseYear: 2023,
  ratingPosition: 3,
}

getMovieHighlight(movie2)
// "In TOP 10 at position: 3"

const movie3: Movie = {
  title: 'Fun with for loops',
  releaseYear: 2023,
  ratingPosition: 74,
}

getMovieHighlight(movie3)
// "Released in 2023"
