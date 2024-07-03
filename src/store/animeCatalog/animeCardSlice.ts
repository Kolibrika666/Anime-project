import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import {AnimeCardTypes } from "../../api/catalogAnimeApi";

type InitialStateType = {
    catalogAnime: AnimeCardTypes[],
}

const initialState: InitialStateType = {
    catalogAnime: [],
}


const animeCardSlice = createSlice({
    name: 'animeCard',
    initialState,
    reducers: {
        setCatalogAnime(state, action : PayloadAction<AnimeCardTypes[]>) {
            state.catalogAnime = action.payload
        }
    }
})

export const { setCatalogAnime } = animeCardSlice.actions

export default animeCardSlice.reducer