import React from 'react';
import s from './animeCard.module.scss'
import { AnimeAttributesTypes } from '../../../api/catalogAnimeApi';

const AnimeCard = (props: AnimeAttributesTypes) => {
    return (
        <div className={s.card}>
            <h3>{props.canonicalTitle}</h3>
            <img src={props.posterImage.medium}/>
            <p>{props.status}</p>
            <p>{props.averageRating}</p>
        </div>
    );
};

export default AnimeCard;