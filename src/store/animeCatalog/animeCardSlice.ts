import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import {AnimeCardTypes } from "../../api/catalogAnimeApi";

type InitialStateType = {
    catalogAnime: AnimeCardTypes[],
    anime: AnimeCardTypes,
    string: string,
    animeCheck: AnimeCardTypes,
    animeList: AnimeCardTypes[],
    favoriteAnimeList: AnimeCardTypes[],
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
    animeCheck: {
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
    } ,
    animeList: [],
    favoriteAnimeList: [],
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
        },
        SetAnimeCheck(state, action : PayloadAction<AnimeCardTypes>) {
            state.animeCheck = action.payload
        },
        setFavoriteAnime(state, action : PayloadAction<AnimeCardTypes[]>) {
            state.favoriteAnimeList.push(...action.payload)
        },

        setSearchAnime(state, action : PayloadAction<AnimeCardTypes[]>) {
            state.animeList = action.payload
        },
    }
})

export const { setCatalogAnime, setAnime, SetStr, SetAnimeCheck, setSearchAnime, setFavoriteAnime} = animeCardSlice.actions

export default animeCardSlice.reducer