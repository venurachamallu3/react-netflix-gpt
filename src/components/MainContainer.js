import React, { useDebugValue, useEffect, useState } from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import {  useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import useTrailer from '../Hooks/useTrailer'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import { API_OPTIONS } from '../utilis/constants'
import { addNowPlayingMovies } from '../utilis/MoviesSlice'

const MainContainer = () => {

  const dispatch =useDispatch();
   const { search } = useLocation();
  const params = new URLSearchParams(search);
  const seleid = params.get("id");

  
  useTrailer(seleid);
  const trailervideo = useSelector(store=>store?.movie?.Trailer)
  const movies = useSelector(store=> store.movie?.nowPlayingMovies)

    if(!movies ||  movies.length ===0) return

    let { original_title,  overview , id } = movies[0]

    id=seleid;

  return (
    <div className="pt-[30%]  bg-black md:pt-0">
        <VideoTitle overview ={overview} id={id} title={original_title} />
        <VideoBackground movieId= {id} />
    
    </div>
)
} 

export default MainContainer