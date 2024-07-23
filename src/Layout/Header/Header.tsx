import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss'
import { SetAnimeCheck } from '../../store/animeCatalog/animeCardSlice';
import { getRandomAnime } from '../../api/catalogAnimeApi';
import { useAppDispatch, useAppSelector } from '../../store';

function Header() {

    const dispatch = useAppDispatch()
const getRandom = useCallback(async () => {
    const data = await getRandomAnime()
    dispatch(SetAnimeCheck(data))
}, [dispatch])


    return (
        <div className={s.header}>
        <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/'>Anime</NavLink>
        <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/Catalog_Anime'>Catalog Anime</NavLink>
        <NavLink onClick={getRandom} className={({isActive}) => (isActive ? s.yellow : "")} to = '/Random_Anime'>Random anime</NavLink>
        <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/My_Favorite_Anime'>My Favorite Anime</NavLink>
        <NavLink className={({isActive}) => (isActive ? s.yellow : "")} to = '/Search_Page'>Search</NavLink>
</div>
    );
}

export default Header;