import React from 'react'
import { Link } from 'react-router-dom'

export const MovieCard = ({id,posterPath}) => {

 
  return (
    <div className="w-36 md:w-48 pr-4">
         {/* <img alt="Movie Card" src={"https://image.tmdb.org/t/p/w500" + posterPath} /> */}
 
 <Link to={"/browse?id="+id}>
        <img alt="Movie Card" src={"https://image.tmdb.org/t/p/w500" + posterPath} />
        </Link>
  </div>
  )
}
