import React, {  useCallback, useState } from 'react';
import s from './Search.module.scss'
import { getAnimeSearch } from '../../../api/catalogAnimeApi';
import { useAppDispatch, useAppSelector } from '../../../store';
import { setSearchAnime } from '../../../store/animeCatalog/animeCardSlice';
import AnimeCard from '../CatalogAnime/AnimeCard';
import st from '../CatalogAnime/catalogAnime.module.scss'

const Search = () => {

    const [v, setV] = useState("")

    const searchAnime = useAppSelector(store => store.animeCard.animeList)
    const dispatch = useAppDispatch()

    const getAnime = useCallback( async (e:string) => {
        const data = await getAnimeSearch(e)
        dispatch(setSearchAnime(data))
    }, [dispatch])

    return (
        <div className={s.search}>
            <form onSubmit={ e => {
            console.log(v)
            e.preventDefault()
            getAnime(v)

        }
            }>
                <input placeholder='anime' type='text' value={v} onChange={e =>
                { 
                    console.log(e.target.value)
                    setV(e.target.value)
                    getAnime(e.target.value)
                }
                }></input>
                <button type='submit'><span>search</span></button>
            </form>
        <div className={st.catalog}>
            {searchAnime.map(item=> (
                <article>
               <AnimeCard  id = {item.id}
               attributes = {item.attributes}
               />
               </article>
           ))} </div> 
           </div>
    );
};

export default Search;