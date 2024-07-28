import React, { useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss'
import { SetAnimeCheck, setFavoriteAnimeClean} from '../../store/animeCatalog/animeCardSlice';
import { AnimeCardTypes, getRandomAnime } from '../../api/catalogAnimeApi';
import { useAppDispatch, useAppSelector } from '../../store';

function Header() {

    const dispatch = useAppDispatch()
const getRandom = useCallback(async () => {
    const data = await getRandomAnime()
    dispatch(SetAnimeCheck(data))
}, [dispatch])


const favoriteAnimeList = useAppSelector(store => store.animeCard.favoriteAnimeList)


const getAnimeUseId = () =>{
    const animeSet: Set<AnimeCardTypes> = new Set()
    favoriteAnimeList.map(e=>animeSet.add(e))

   dispatch(setFavoriteAnimeClean(Array.from(animeSet)))
}

    return (
        <div className={s.header}>
        <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/'>Anime</NavLink>
        <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/Catalog_Anime'>Catalog Anime</NavLink>
        <NavLink onClick={getRandom} className={({isActive}) => (isActive ? s.yellow : "")} to = '/Random_Anime'>Random anime</NavLink>
        <NavLink  onClick={getAnimeUseId} className={({isActive}) => (isActive ? s.yellow : "")} to = '/My_Favorite_Anime'>My Favorite Anime</NavLink>
        <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/Search_Page'>Search</NavLink>
</div>
    );
}

export default Header;