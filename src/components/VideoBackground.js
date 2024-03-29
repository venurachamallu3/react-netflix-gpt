import React from 'react'
import { useSelector } from 'react-redux';
import useTrailer from '../Hooks/useTrailer';

const VideoBackground = ({movieId}) => {

  console.log("moie id in v bg "+movieId)

  // useTrailer(movieId);

    const trailervideo = useSelector(store=> store.movie?.Trailer)

    if(!trailervideo) return
  return (
    <div className=" w-screen">
      <iframe
       className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailervideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>

  )
}

export default VideoBackground