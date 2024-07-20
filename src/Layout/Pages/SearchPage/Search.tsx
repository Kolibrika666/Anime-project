import React, { useCallback, useEffect } from 'react';
import s from './Search.module.scss'
import { useAppDispatch, useAppSelector } from '../../../store';
import { setSearchAnime } from '../../../store/animeCatalog/animeCardSlice';
import { getAnimeSearch } from '../../../api/catalogAnimeApi';
import AnimeCard from '../CatalogAnime/AnimeCard';

const Search = () => {

    const animeList = useAppSelector(store => store.animeCard.animeList)
    const dispatch = useAppDispatch()

//     let text = ''

//     function G (e:string)  {

//         let e = ""

//         const getAnime = useCallback(async () => {
//             const data = await getAnimeSearch()
//             dispatch(setSearchAnime(data))
//             console.log(data)
//         }, [dispatch])
//     }

// const handleChange = (e) => {
//     G(e)
// }

// handleSubmit(e) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     e.preventDefault();
//   }

    return (
        <div className={s.search}>
            {/* <form>
  <label>
    Search anime:
    <input type="text" name={text} onChange={handleChange} />
  </label>
  <input type="submit"  value="Submit" />
</form>

<div className = {s.catalog}>

 {animeList.map(item=> (
       <AnimeCard  id = {item.id}
       attributes = {item.attributes}
       />
   ))} 



</div> */}
        </div>
    );
};

export default Search;