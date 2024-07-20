import React from 'react';
import s from './ButtonLikes.module.scss'
import { useAppDispatch } from '../../../store';
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { setFavoriteAnime } from '../../../store/animeCatalog/animeCardSlice';

const ButtonLikes = (props: AnimeCardTypes) => {

    const dispatch = useAppDispatch()
    const animeList = [props]
    const getAnimeList = () => {
       dispatch(setFavoriteAnime(animeList))
        console.log(animeList)
    }

    return (
        <div >
            <button className={s.like} onClick={getAnimeList}>like</button>
        </div>
    );
};

export default ButtonLikes;