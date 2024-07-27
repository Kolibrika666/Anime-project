import React from 'react';
import s from './animeCard.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { setFavoriteAnime, setLikes} from '../../../store/animeCatalog/animeCardSlice';

export const set: Set<AnimeCardTypes> = new Set()

const ButtonLikes = (props: AnimeCardTypes) => {

    const dispatch = useAppDispatch()
    const animeList = [props]
    const like = useAppSelector(store => store.animeCard.like)

    const getAnimeList = () => {
        like == 0 ? dispatch(setLikes(1)) :  dispatch(setLikes(0))
       dispatch(setFavoriteAnime(animeList))
       animeList.map((e)=> set.add(e))
    }

    return (
            <button className={s.like} onClick={() => {getAnimeList()}}><span>like</span></button>
    );
};

export default ButtonLikes;