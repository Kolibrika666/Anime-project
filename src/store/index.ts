import { configureStore } from "@reduxjs/toolkit";
import animeCardSlice from "./animeCatalog/animeCardSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
reducer : {
    animeCard: animeCardSlice,
}
})

export default store;

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch