import React, { useCallback, useEffect } from 'react';
import s from './StartPage.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { getFavoriteAnime } from '../../../api/catalogAnimeApi';
import { setAnime, setCatalogAnime } from '../../../store/animeCatalog/animeCardSlice';
import AnimeCard from '../CatalogAnime/AnimeCard';


const StartPage = () => {

    const anime = useAppSelector(store => store.animeCard.anime)
    const dispatch = useAppDispatch()
    const catalogFavoriteAnime = useAppSelector(store => store.animeCard.favoriteAnimeListClean)
    const getfavoriteAnime = useCallback(async () => {
        const data = await getFavoriteAnime()
        dispatch(setAnime(data))
    }, [dispatch])

    const like = (id: string) => {
        return catalogFavoriteAnime.find(e  => e.id == id) ? '1' : '0'
    }

    useEffect(() => {
        getfavoriteAnime()
    }, [getfavoriteAnime])

    return (
        <div className={s.start}>

        <picture></picture>
        <article>
        <h3>Most people like this anime!</h3>
        <div className={s.flex}>
         <div className={s.card}><AnimeCard  id = {anime.id}
            attributes = {anime.attributes} like={like(anime.id)}/>
        </div>
        <div className={s.synopsis}>
        <h4>Description</h4>
        <p>{anime.attributes.synopsis}</p>
        </div>
        </div>
        </article>
        
        </div>
    );
};

export default StartPage;
