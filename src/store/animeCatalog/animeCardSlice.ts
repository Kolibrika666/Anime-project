import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import {AnimeCardTypes } from "../../api/catalogAnimeApi";

type InitialStateType = {
    catalogAnime: AnimeCardTypes[],
    anime: AnimeCardTypes,
    string: string,
    animeCheck: AnimeCardTypes,
    animeList: AnimeCardTypes[],
    favoriteAnimeList: AnimeCardTypes[],
    favoriteAnimeListClean: AnimeCardTypes[],
    like: string | undefined,

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
        startDate: "",
        endDate: "",
    },
relationships: {},
    },
    string: "",
    animeCheck: {
        id: "",
        type: "",
        like: '0',
    links: {},
    attributes: {
        canonicalTitle:"",
        averageRating: "",
        startDate: "",
        endDate: "",
        status: "",
        posterImage: {},
    },
relationships: {},
    } ,
    animeList: [],
    favoriteAnimeList: [],
    favoriteAnimeListClean: [],
    like: '0',
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
        setFavoriteAnimeClean(state, action : PayloadAction<AnimeCardTypes[]>) {
    
            state.favoriteAnimeListClean = action.payload
        },

        setSearchAnime(state, action : PayloadAction<AnimeCardTypes[]>) {
            state.animeList = action.payload
            
        },
        setLike(state, action : PayloadAction<string>) {
             action.payload == '0' ? state.like = '1' : state.like = '0'
            
        },

    }
})

export const { setCatalogAnime, setAnime, SetStr, SetAnimeCheck, setSearchAnime, setFavoriteAnime, setFavoriteAnimeClean, setLike} = animeCardSlice.actions

export default animeCardSlice.reducer