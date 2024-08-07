
import React, { useCallback, useEffect} from 'react';
import { getAnimeData, getAnimeDataAfter } from '../../../api/catalogAnimeApi';
import s from './catalogAnime.module.scss'
import store, { useAppDispatch, useAppSelector } from '../../../store';
import { setCatalogAnime } from '../../../store/animeCatalog/animeCardSlice';
import AnimeCard from './AnimeCard';
import { useInView } from 'react-intersection-observer';

function CatalogAnime() {

    const catalogAnime = useAppSelector(store => store.animeCard.catalogAnime)
    const catalogFavoriteAnime = useAppSelector(store => store.animeCard.favoriteAnimeListClean)
    const likeState = useAppSelector(store => store.animeCard.like)
    
    const dispatch = useAppDispatch()
    const getCatalogAnime = useCallback( async () => {
        const data = await getAnimeData()
        dispatch(setCatalogAnime(data))
    }, [dispatch])
   
    const getAnimeAfter = useCallback( async () => {
        const data = await getAnimeDataAfter()
        dispatch(setCatalogAnime(data))
    }, [dispatch])

    useEffect(() => {
        getCatalogAnime()
    }, [getCatalogAnime])

    const {ref , inView} = useInView({
        onChange: (inView) => {
                    if (inView) {
                        getAnimeAfter()
                        window.scrollBy(0, -200)
                    }
                },
            })

    const like = (id: string) => {
    return catalogFavoriteAnime.find(e  => e.id == id) ? '1' : '0'
    }
    return (

        <div className = {s.catalog} >
           {catalogAnime.map(item=> (
            
            <article key = {item.id}>
                <AnimeCard  id = {item.id}
                attributes = {item.attributes}
                like={like(item.id)}
                />
            </article>
            ))} 

        <p ref={ref}></p>

        </div>
    );
}

export default CatalogAnime;
  