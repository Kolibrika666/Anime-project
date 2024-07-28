import React from 'react';
import s from './animeCard.module.scss'
import { useAppDispatch } from '../../../store';
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { setFavoriteAnime, setLike} from '../../../store/animeCatalog/animeCardSlice';

const ButtonLikes = (props: AnimeCardTypes) => {
    const dispatch = useAppDispatch()
    const getAnimeList = () => {
    dispatch(setFavoriteAnime([props]))
    // dispatch(setLike(props.like))
    console.log(props.like)
    }
    
    const btnClass = (like: string | undefined) => {
       return like == '0' ? s.noActivLike : s.activLike
    }
    
    return (
            <button key={props.id} className={btnClass(props.like)}   onClick={getAnimeList}>like</button>
    );
};

export default ButtonLikes;