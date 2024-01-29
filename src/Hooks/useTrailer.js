import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utilis/MoviesSlice";

const useTrailer = (movieId)=>{
    const dispatch  = useDispatch()

    const trailervideo = useSelector(store=> store.movie?.Trailer)

    
    useEffect(()=>{
      
    console.log("sarting in useeffect "+movieId)
          getMovieTrailer(movieId)

    },[])

    async function getMovieTrailer(movieId){
      console.log("ID -"+movieId)
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId +
              "/videos",
            API_OPTIONS
          );
          const json = await data.json();
          // console.log("trailer reults "+ json.results)
          const trailerfilter = json.results.filter((video)=>video.type==="Trailer")
          console.log(trailerfilter[0])
          const  trailer = trailerfilter.length ? trailerfilter[0] : json.results[0]

          console.log("trialer = "+trailer)
          dispatch(addMovieTrailer(trailer));

    }


}

export default useTrailer;