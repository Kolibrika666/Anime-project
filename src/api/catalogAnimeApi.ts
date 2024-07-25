import { useAppSelector } from "../store";


export type DataTypes<T> = {
data: T[];
links: object;
meta: object;
}

export type AnimeCardTypes = {
id: string;
type?: string;
links?: object;
attributes: AnimeAttributesTypes;
relationships?: object;
}

export type AnimeAttributesTypes = {
  canonicalTitle: string;
  averageRating: string | number;
  status: string;
  posterImage: AnimePosterImageTypes;
  synopsis?: "";
  startDate?: "";
  endDate?: "";
  episodeCount?: "";
}

export type AnimePosterImageTypes = {
  tiny?: string;
  large?: string;
  small?: string;
  medium?: string;
  original?: string;
}



export const getAnimeData = async() => {
  const responce = await fetch ('https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=0')
  if (responce.status === 200) {
    const data: DataTypes<AnimeCardTypes> = await responce.json();
    return data.data;
  } else throw new Error('some error')

}

let n = 12

export const getAnimeDataBefore = async() => {
  const responce = await fetch ('https://kitsu.io/api/edge/anime?page[limit]=12&page[offset]=' + n)
  if (responce.status === 200) {
    const data: DataTypes<AnimeCardTypes> = await responce.json();
    n+=12
    return data.data;
  } else throw new Error('some error')

  
}

export const getFavoriteAnime = async() => {
  const responce = await fetch ('https://kitsu.io/api/edge/anime?sort=-favoritesCount')
  if (responce.status === 200) {
    const data: DataTypes<AnimeCardTypes> = await responce.json();
    return data.data[0];
  } else throw new Error('some error')
}



export const getRandomAnime = async() => {

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  const id = getRandomInt(1998)

  const responce = await fetch ('https://kitsu.io/api/edge/anime?filter[id]='+id)
  if (responce.status === 200) {
    const data: DataTypes<AnimeCardTypes> = await responce.json();
    return data.data[0];
  } else throw new Error('some error')
}

export const getAnimeSearch = async(e:string) => {
  let text = e
  const responce = await fetch ('https://kitsu.io/api/edge/anime?filter[text]='+ text)
  if (responce.status === 200) {
    const data: DataTypes<AnimeCardTypes> = await responce.json();
    return data.data;
  } else throw new Error('some error')
}