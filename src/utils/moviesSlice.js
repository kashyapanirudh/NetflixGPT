import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        addNowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action)=>{
            state.addNowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action)=>{
            state.popularMovies = action.payload;
        },
        addTrailerVideo: (state,action)=>{
            state.addTrailerVideo = action.payload;
        }
    }
}) 

export default moviesSlice.reducer;
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies} = moviesSlice.actions;