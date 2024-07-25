import React from 'react';
import s from './animeCard.module.scss'
import { useAppDispatch } from '../../../store';
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { setFavoriteAnime} from '../../../store/animeCatalog/animeCardSlice';

export const set: Set<AnimeCardTypes> = new Set()

const ButtonLikes = (props: AnimeCardTypes) => {

    const dispatch = useAppDispatch()
    const animeList = [props]

    const getAnimeList = () => {
       dispatch(setFavoriteAnime(animeList))
       animeList.map((e)=> set.add(e))
    }

    return (
            <button className={s.like} onClick={() => {
                getAnimeList()
            }}><span>like</span></button>
    );
};

export default ButtonLikes;