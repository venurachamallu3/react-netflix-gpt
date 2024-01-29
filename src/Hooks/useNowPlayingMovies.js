import { useEffect } from "react";
import { addNowPlayingMovies } from "../utilis/MoviesSlice";
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = ()=>{
    
    const dispatch = useDispatch();
    useEffect(()=>{
        getNowPlayingMovies()
    },[])


    async function  getNowPlayingMovies() {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();

        dispatch(addNowPlayingMovies(json.results))
    }
}

export default useNowPlayingMovies;