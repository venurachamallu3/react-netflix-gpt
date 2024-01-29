import { useEffect } from "react"
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utilis/MoviesSlice";

const useTrendingMovies=()=>{

    const dispatch = useDispatch();
    useEffect(()=>{
        getTrendingMovies();
    },[])
    async function getTrendingMovies(){
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", API_OPTIONS)
        const json = await data.json();
        dispatch(addTrendingMovies(json.results))

    }
}


export default useTrendingMovies