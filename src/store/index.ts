import { configureStore } from "@reduxjs/toolkit";
import animeCardSlice from "./animeCatalog/animeCardSlice";

const store = configureStore({
reducer : {
    animeCard: animeCardSlice,
}
})

export default store;