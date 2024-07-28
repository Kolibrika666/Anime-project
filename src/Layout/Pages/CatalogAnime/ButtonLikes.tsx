import React from 'react';
import s from './animeCard.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { setFavoriteAnime,  setLikes} from '../../../store/animeCatalog/animeCardSlice';



const ButtonLikes = (props: AnimeCardTypes) => {

    const animeList = useAppSelector(store => store.animeCard.favoriteAnimeList)

    const dispatch = useAppDispatch()

    const getAnimeList = () => {
       dispatch(setFavoriteAnime([props]))
       console.log(animeList)
    }
    
    const btnClass = () => {
       return props.like == 0 ? s.noActivLike : s.activLike
    }
    
    return (
            <button key={props.id} className={btnClass()}   onClick={getAnimeList}>like</button>
    );
};

export default ButtonLikes;