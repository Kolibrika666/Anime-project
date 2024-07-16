import React from 'react';
import s from './animeCard.module.scss'
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { NavLink } from 'react-router-dom';
import { useAppDispatch} from '../../../store';
import { SetId } from '../../../store/animeCatalog/animeCardSlice';

const AnimeCard = (props :AnimeCardTypes) => {

    const dispatch = useAppDispatch()
    const getIdAnime = () => dispatch(SetId(props.id))
    

    return (
        <div key = {props.id} className={s.card}>
            <h3>{props.attributes.canonicalTitle}</h3>
            <NavLink to = '/AnimePage' key={props.id} onClick={getIdAnime}><img src={props.attributes.posterImage.medium}/></NavLink>
            <p>{props.attributes.status}</p>
            <p>{props.attributes.averageRating}</p>
        </div>
    );
};

export default AnimeCard;

