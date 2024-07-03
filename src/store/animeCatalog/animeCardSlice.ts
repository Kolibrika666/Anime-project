import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { AnimeAttributesTypes } from "../../api/catalogAnimeApi";

type InitialStateType = {
    animeCatalog: AnimeAttributesTypes[],
}

const initialState: InitialStateType = {
    animeCatalog: [],
}


const animeCardSlice = createSlice({
    name: 'animeCard',
    initialState,
    reducers: {
        setCatalogAnime(state, action : PayloadAction<AnimeAttributesTypes[]>) {
            state.animeCatalog = action.payload
        }
    }
})

export const { setCatalogAnime } = animeCardSlice.actions

export default animeCardSlice.reducer