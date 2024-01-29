import { configureStore } from "@reduxjs/toolkit";
import MoviesSlice from "./MoviesSlice";

const store = configureStore({
    reducer:{movie:MoviesSlice}
})


export default store;