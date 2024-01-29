import React, { useEffect, useState } from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import useTrendingMovies from '../Hooks/useTrendingMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import { useLocation } from 'react-router-dom'
import useTrailer from '../Hooks/useTrailer'

const Browse = () => {
  
  useTrailer(787699);
  useNowPlayingMovies();  
  useTrendingMovies();
  usePopularMovies();
  // const np = useSelector(store=>store.movie.nowPlayingMovies)
  // if(!selectedid) dispatch(addMovieTrailer(np[0]))

  
  return (
    <>
    <Header/>
    
    <MainContainer/>
    <SecondaryContainer/>
    </>
  )
}

export default Browse