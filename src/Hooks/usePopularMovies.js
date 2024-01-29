import { useEffect } from "react"
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utilis/MoviesSlice";

const usePopularMovies=()=>{

    const dispatch = useDispatch();
    useEffect(()=>{
        getPopularMovies();

    },[])
    async function getPopularMovies(){
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
        // console.log(json.results)

    }
}


export default usePopularMovies