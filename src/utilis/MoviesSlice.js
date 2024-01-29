import { createSlice } from "@reduxjs/toolkit";

const MovieSlice  = createSlice({
    name:"movie",
    initialState : {
        nowPlayingMovies :[],
        TrendingMovies : [],
        Trailer:[],
        PopularMovies:[]

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
                     state.nowPlayingMovies = action.payload
        },
        addMovieTrailer:(state, action)=>{
            state.Trailer= action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.TrendingMovies= action.payload
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload
        }
    }

})



export const {addNowPlayingMovies , addMovieTrailer , addTrendingMovies , addPopularMovies} = MovieSlice.actions;

export default MovieSlice.reducer;

