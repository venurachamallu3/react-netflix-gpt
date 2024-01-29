import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector(store=>store.movie?.nowPlayingMovies)
    const TrendingMovies = useSelector(store=> store.movie?.TrendingMovies)
    const popularMovies = useSelector(store=> store.movie?.PopularMovies)

  return (
    nowPlayingMovies && (
        <div className="bg-black">
          <div className=" mt-0 md:-mt-10 pl-4 md:pl-12 relative z-20">
            <MoviesList title={"Now Playing"} movies={nowPlayingMovies} />
            <MoviesList title={"Trending"} movies={TrendingMovies} />
            <MoviesList title={"Popular"} movies={popularMovies} />
            <MoviesList
              title={"Upcoming Movies"}
              movies={nowPlayingMovies}
            />
            <MoviesList title={"Horror"} movies={nowPlayingMovies} />
          </div>
        </div>
      )
  )
}

export default SecondaryContainer
