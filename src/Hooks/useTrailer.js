import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utilis/MoviesSlice";

const useTrailer = (movieId)=>{
 if(!movieId) { movieId=572802}
    const dispatch  = useDispatch()

    const trailervideo = useSelector(store=> store.movie?.Trailer)

    
    useEffect(()=>{
          getMovieTrailer(movieId)

    },[movieId])

    async function getMovieTrailer(movieId){
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId +
              "/videos",
            API_OPTIONS
          );
          const json = await data.json();
          // console.log("trailer reults "+ json.results)
          const trailerfilter = json.results.filter((video)=>video.type==="Trailer")
          // console.log(trailerfilter[0])
          const  trailer = trailerfilter.length ? trailerfilter[0] : json.results[0]

          console.log("trialer adding into the redux  is  = "+trailer.id)
          dispatch(addMovieTrailer(trailer));

    }


}

export default useTrailer;