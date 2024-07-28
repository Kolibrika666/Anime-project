
import s from '../CatalogAnime/catalogAnime.module.scss'
import { useAppSelector } from '../../../store';
import AnimeCard from '../CatalogAnime/AnimeCard';
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';


const MyFavorite = () => {

    const animeListClean = useAppSelector(store => store.animeCard.favoriteAnimeListClean)
    let set = new Set()
    for (let i of animeListClean) {
        set.add(i.id)
    }
    const animeList: AnimeCardTypes[] = []
    for (let i of set) {
        animeList.push(animeListClean.find( e => e.id == i))
    }
    console.log(animeList)

    return (
        <div className={s.catalog}>

              {
              animeList.map(item => (
                <article > 
                <AnimeCard  id = {item.id}
                attributes = {item.attributes} like={'1'}
                />
                </article> 
            ))} 

        </div>
    );
};

export default MyFavorite;