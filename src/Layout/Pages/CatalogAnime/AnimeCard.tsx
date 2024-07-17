import React from 'react';
import s from './animeCard.module.scss'
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector} from '../../../store';
import { SetAnimeCheck} from '../../../store/animeCatalog/animeCardSlice';

const AnimeCard = (props :AnimeCardTypes) => {

    const dispatch = useAppDispatch()
    const anime = useAppSelector(store => store.animeCard.animeCheck)

    const getIdAnime = () => {
        dispatch(SetAnimeCheck(props))
        console.log(anime)
    } 
    

    return (
        <div key = {props.id} className={s.card}>
            <h3>{props.attributes.canonicalTitle}</h3>
            <NavLink to = '/Anime_Page' key={props.id} onClick={getIdAnime}><img src={props.attributes.posterImage.medium}/></NavLink>
            <p>{props.attributes.status}</p>
            <p>{props.attributes.averageRating}</p>
        </div>
    );
    
};

export default AnimeCard;

