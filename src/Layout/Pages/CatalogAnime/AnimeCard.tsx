import React from 'react';
import s from './animeCard.module.scss'
import { AnimeCardTypes } from '../../../api/catalogAnimeApi';
import { NavLink } from 'react-router-dom';
import { useAppDispatch} from '../../../store';
import { SetAnimeCheck} from '../../../store/animeCatalog/animeCardSlice';
import ButtonLikes from './ButtonLikes';

export const raiting = (averageRating: string | number) => Math.floor(Number(averageRating)) / 10

const AnimeCard = (props :AnimeCardTypes) => {

    
    

    const dispatch = useAppDispatch()
   
    const getAnime = () => {
        dispatch(SetAnimeCheck(props))
    } 

    const checkStyleRaiting = (raiting: number) => {
      if (raiting >= 80) return  {backgroundColor: 'orange'}
      else if (raiting >= 60) return  {backgroundColor: 'green'}
      else return  {backgroundColor: 'blue'}
    }

    
    
    
    return (
        
        <div  className={s.card}>
            <NavLink to = '/Anime_Page' onClick={getAnime}><img className={s.posterImg} src={props.attributes.posterImage.medium}/></NavLink>
            <h3>{props.attributes.canonicalTitle}</h3>
            <p>
            <span>{props.attributes.status}</span>
            < span style={ checkStyleRaiting(Number(props.attributes.averageRating))}>{raiting(props.attributes.averageRating)}</span>
            </p>
            <ButtonLikes id = {props.id}
                attributes = {props.attributes} like={props.like}/>

            
        </div>
    );

};

export default AnimeCard;

