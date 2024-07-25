import React from 'react';
import s from './animeCard.module.scss'
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector} from '../../../store';
import { SetAnimeCheck} from '../../../store/animeCatalog/animeCardSlice';
import ButtonLikes from './ButtonLikes';

const AnimeCard = (props :AnimeCardTypes) => {

    const dispatch = useAppDispatch()
    const anime = useAppSelector(store => store.animeCard.animeCheck)

    const getAnime = () => {
        dispatch(SetAnimeCheck(props))
        console.log(anime)
    } 

    let raiting: number = Math.floor(Number(props.attributes.averageRating)) / 10

    return (
        
        <div key = {props.id} className={s.card}>
            <NavLink to = '/Anime_Page' key={props.id} onClick={getAnime}><img className={s.posterImg} src={props.attributes.posterImage.medium}/></NavLink>
            <h3>{props.attributes.canonicalTitle}</h3>
            <p>
            <span>{props.attributes.status}</span>
            < span >{raiting}</span>
            </p>
            <ButtonLikes id = {props.id}
                attributes = {props.attributes}/>
        </div>
    );

};

export default AnimeCard;

