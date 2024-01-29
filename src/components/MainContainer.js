import React, { useEffect, useState } from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import {  useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import useTrailer from '../Hooks/useTrailer'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'

const MainContainer = () => {

  const {pi,setpid} = useState();
   const { search } = useLocation();
  const params = new URLSearchParams(search);
  const seleid = params.get("id");

  useEffect(()=>{


  },[])
    
  // useTrailer();
  useNowPlayingMovies();
  const movies = useSelector(store=> store.movie?.nowPlayingMovies)


    if(!movies ||  movies.length ===0) return
    const trailervideo = movies[0]

    const { original_title,  overview , id } = trailervideo

  return (
    <div className="pt-[30%]  bg-black md:pt-0">
        <VideoTitle overview ={overview}  title={original_title} />
        <VideoBackground movieId= {id} />
    
    </div>
)
} 

export default MainContainer