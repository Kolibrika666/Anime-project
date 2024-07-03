import React from 'react';
import s from './animeCard.module.scss'

const AnimeCard = () => {
    return (
        <div className={s.card}>
            <h3>заголовок</h3>
            <img src='https://media.kitsu.io/anime/poster_images/1/large.jpg'/>
            <p>переведена</p>
            <p>рейтинг</p>
        </div>
    );
};

export default AnimeCard;