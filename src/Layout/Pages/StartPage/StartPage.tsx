import React, { useCallback, useEffect } from 'react';
import s from './StartPage.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { getFavoriteAnime } from '../../../api/catalogAnimeApi';
import { setAnime, setCatalogAnime } from '../../../store/animeCatalog/animeCardSlice';
import AnimeCard from '../CatalogAnime/AnimeCard';

const StartPage = () => {

    const anime = useAppSelector(store => store.animeCard.anime)
    const dispatch = useAppDispatch()

    const getfavoriteAnime = useCallback(async () => {
        const data = await getFavoriteAnime()
        dispatch(setAnime(data))
    }, [dispatch])

    useEffect(() => {
        getfavoriteAnime()
    }, [getfavoriteAnime])

    return (
        <div className={s.start}>
            <img className={s.banner}  src = 'https://media.kitsu.io/anime/cover_images/50/large.jpg' alt = ""/>
            <article>
            
                <h3>Это аниме нравится большинству!</h3>
            
            <AnimeCard  id = {anime.id}
                attributes = {anime.attributes}/>
            <h4>Описание</h4>
            <p className={s.synopsis}>{anime.attributes.synopsis}</p>
            </article>
        </div>
    );
};

export default StartPage;
