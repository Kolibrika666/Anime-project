import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import {AnimeCardTypes } from "../../api/catalogAnimeApi";

type InitialStateType = {
    catalogAnime: AnimeCardTypes[],
    anime: AnimeCardTypes,
    string: string,
}

const initialState: InitialStateType = {
    catalogAnime: [],

    anime: {
        id: "",
        type: "",
    links: {},
    attributes: {
        canonicalTitle:"",
        averageRating: "",
        status: "",
        posterImage: {},
    },
relationships: {},
    },
    string: "",
}



const animeCardSlice = createSlice({
    name: 'animeCard',
    initialState,
    reducers: {
        setCatalogAnime(state, action : PayloadAction<AnimeCardTypes[]>) {
            state.catalogAnime = action.payload
        },
        setAnime(state, action : PayloadAction<AnimeCardTypes>) {
            state.anime = action.payload
        },
        SetStr(state, action : PayloadAction<string>) {
            state.string = action.payload
        }
    }
})

export const { setCatalogAnime, setAnime, SetStr } = animeCardSlice.actions

export default animeCardSlice.reducer